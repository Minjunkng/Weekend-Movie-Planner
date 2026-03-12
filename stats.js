async function loadStatistics() {
    try {
        //Logic to trace anextract stats data from server and display it on the page(returns errors if needed)
        const response = await fetch("/stats-data");

        if (!response.ok)
            throw new Error("Server returned error");

        const data = await response.json();

        const container = document.getElementById("statsContainer");

        if (!container) {
            console.error("statsContainer not found in HTML");
            return;
        }

        container.innerHTML = "";

        //Parses through data and creates a card for each streaming service with its stats
        Object.entries(data).forEach(([serviceName, stats]) => {
            const div = document.createElement("div");
            div.className = "stats-card";

            div.innerHTML = `
                <h3>${serviceName}</h3>
                <p>Total Movies Ordered: ${stats.moviesOrdered}</p>
                <p>Total Revenue: $${stats.revenue.toFixed(2)}</p>
                <p>Average Order Cost: $${stats.averageOrder.toFixed(2)}</p>
                <p>Most Popular Movie: ${stats.mostPopular}</p>
            `;

            container.appendChild(div);
        });

    } catch (err) {
        console.error("Stats load error:", err);
    }
}

document.addEventListener("DOMContentLoaded", loadStatistics);