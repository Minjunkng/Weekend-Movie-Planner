const serviceSelect = document.getElementById("serviceSelect");
const serviceName = document.getElementById("serviceName");
const minOrder = document.getElementById("minOrder");
const serviceFee = document.getElementById("serviceFee");
const genreList = document.getElementById("genreList");
const moviesContainer = document.getElementById("moviesContainer");
const orderList = document.getElementById("orderList");
const feesTotal = document.getElementById("total-fees");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const totalEl = document.getElementById("total");
const minOrderMsg = document.getElementById("minOrderMsg");
const submitOrderBtn = document.getElementById("submitOrder");

let streamingServices = [];
let currentService = null;
let currentGenre = null;
let currentOrder = {};

/* ---------- LOAD SERVICES FOR DROPDOWN ---------- */
fetch("/services")
    .then(res => res.json())
    .then(data => {
        streamingServices = data;

        data.forEach(service => {
            const option = document.createElement("option");
            option.value = service.id;
            option.textContent = service.name;
            serviceSelect.appendChild(option);

            currentOrder[service.name] = [];
        });
    })
    .catch(err => console.error(err));

/* ---------- SERVICE SELECTED ---------- */
serviceSelect.addEventListener("change", () => {
    const id = serviceSelect.value;
    if (!id) return;

    fetch(`/services?id=${id}`)
        .then(res => res.json())
        .then(service => {
            currentService = service;
            currentGenre = "All";

            displayServiceInfo(service);
            displayGenres(service);
            displayMovies(service);
        })
        .catch(err => console.error(err));
});

/* ---------- DISPLAY SERVICE INFO ---------- */
function displayServiceInfo(service) {
    serviceName.textContent = service.name;
    minOrder.textContent = `Minimum Order: $${service.minOrder.toFixed(2)}`;
    serviceFee.textContent = `Service Fee: $${service.serviceFee.toFixed(2)}`;
}

/* ---------- DISPLAY GENRES ---------- */
function displayGenres(service) {
    genreList.innerHTML = "";

    const all = document.createElement("li");
    all.textContent = "All";
    all.onclick = () => {
        currentGenre = "All";
        displayMovies(service);
    };
    genreList.appendChild(all);

    Object.keys(service.genres).forEach(genre => {
        const li = document.createElement("li");
        li.textContent = genre;
        li.onclick = () => {
            currentGenre = genre;
            displayMovies(service);
        };
        genreList.appendChild(li);
    });
}

/* ---------- MOVIES ---------- */
function chooseMovieIcon(movie) {
    for (const mvs of Object.values(currentOrder)) {
        for (const m of mvs) {
            if (m.id === movie.id) return "images/selected.svg";
        }
    }
    return "images/unselected.svg";
}

function displayMovies(service) {
    moviesContainer.innerHTML = "";

    Object.entries(service.genres).forEach(([genre, movies]) => {
        if (currentGenre === "All" || currentGenre === genre) {
            const ul = document.createElement("ul");

            movies.forEach(movie => {
                const li = document.createElement("li");
                li.className = "movie-item";
                li.dataset.id = movie.id;

                const img = document.createElement("img");
                img.src = chooseMovieIcon(movie);

                // Inline scaling cuz im too lazy
                img.style.width = "40px";
                img.style.height = "40px"; 
                img.style.cursor = "pointer";
                img.style.marginRight = "10px";

                img.onclick = () => toggleMovieSelection(movie, img);

                li.innerHTML = `
                    <span>${movie.title} (${movie.year})</span>
                    <p>${movie.description}</p>
                    <span>$${movie.price.toFixed(2)}</span>
                `;

                li.prepend(img);
                ul.appendChild(li);
            });

            moviesContainer.appendChild(ul);
        }
    });
}

/* ---------- ORDER ---------- */
function toggleMovieSelection(movie, imgEl) {
    const list = currentOrder[currentService.name];
    const index = list.findIndex(m => m.id === movie.id);

    if (index === -1) {
        list.push(movie);
        imgEl.src = "images/selected.svg";
    } else {
        list.splice(index, 1);
        imgEl.src = "images/unselected.svg";
    }

    updateOrderSummary();
}

/* ---------- ORDER SUMMARY ---------- */
function updateOrderSummary() {
    orderList.innerHTML = "";

    let feeTotal = 0;
    let subtotal = 0;

    for (const serviceName in currentOrder) {
        const movies = currentOrder[serviceName];

        if (movies.length > 0) {
            const service = streamingServices.find(s => s.name === serviceName);
            feeTotal += service.serviceFee;
        }

        movies.forEach(movie => {
            subtotal += movie.price;

            const li = document.createElement("li");
            li.textContent = `${movie.title} (${movie.year}) - $${movie.price.toFixed(2)}`;
            orderList.appendChild(li);
        });
    }

    subtotal += feeTotal;
    const tax = subtotal * 0.13;
    const total = subtotal + tax;

    feesTotal.textContent = `Fees: $${feeTotal.toFixed(2)}`;
    subtotalEl.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    taxEl.textContent = `Tax: $${tax.toFixed(2)}`;
    totalEl.textContent = `Total: $${total.toFixed(2)}`;

    submitOrderBtn.classList.toggle("hidden", total === 0);
}

/* ---------- SUBMIT ORDER ---------- */
submitOrderBtn.addEventListener("click", () => {
    const orderData = {
        fees: {},
        subtotal: parseFloat(subtotalEl.textContent.replace(/[^\d.]/g, "")),
        tax: parseFloat(taxEl.textContent.replace(/[^\d.]/g, "")),
        total: parseFloat(totalEl.textContent.replace(/[^\d.]/g, "")),
        movies: currentOrder
    };

    streamingServices.forEach(service => {
        if (currentOrder[service.name].length > 0)
            orderData.fees[service.name] = service.serviceFee;
    });

    fetch("/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
    })
    .then(res => res.json())
    .then(() => {
        alert("Order submitted successfully!");
        location.reload();
    });
});