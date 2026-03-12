const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const SERVICES_DIR = path.join(__dirname, "streamingServices");

let streamingServices = [];
let orderHistory = [];

/* ---------------- MIME TYPE ---------------- */
function getMimeType(file) {
    const ext = path.extname(file).toLowerCase();
    switch(ext) {
        case '.js': return 'application/javascript';
        case '.css': return 'text/css';
        case '.jpg': return 'image/jpeg';
        case '.png': return 'image/png';
        case '.svg': return 'image/svg+xml';
        case '.json': return 'application/json';
        case '.html': return 'text/html';
        default: return 'text/plain';
    }
}

/* ---------------- STATIC FILE SERVER ---------------- */
function serveStatic(filePath, res) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("File not found");
        } else {
            res.writeHead(200, { "Content-Type": getMimeType(filePath) });
            res.end(data);
        }
    });
}

/* ---------------- LOAD SERVICES ---------------- */
function loadServices() {
    return new Promise((resolve, reject) => {
        fs.readdir(SERVICES_DIR, (err, files) => {
            if (err) return reject(err);

            let loaded = 0;

            files.forEach(file => {
                const filePath = path.join(SERVICES_DIR, file);
                fs.readFile(filePath, "utf8", (err, data) => {
                    if (err) return reject(err);

                    streamingServices.push(JSON.parse(data));
                    loaded++;

                    if (loaded === files.length) resolve();
                });
            });
        });
    });
}

/* ---------------- REQUEST HANDLER ---------------- */
function handleRequest(req, res) {
    const parsed = url.parse(req.url, true);
    const pathname = parsed.pathname;

    /* ---------- HOME PAGE ---------- */
    if (req.method === "GET" && pathname === "/") {
        return serveStatic(path.join(__dirname, "home.html"), res);
    }

    /* ---------- ORDER FORM PAGE ---------- */
    if (req.method === "GET" && pathname === "/order") {
        return serveStatic(path.join(__dirname, "orderForm.html"), res);
    }

    /* ---------- STATS PAGE ---------- */
    if (req.method === "GET" && pathname === "/stats") {
        return serveStatic(path.join(__dirname, "stats.html"), res);
    }

    /* ---------- SERVICES API ---------- */
    if (req.method === "GET" && pathname === "/services") {
        const id = parsed.query.id;

        if (id) {
            const service = streamingServices.find(s => s.id == id);
            if (!service) {
                res.writeHead(404);
                return res.end("Service not found: Error 404");
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(service));
        }

        const summary = streamingServices.map(s => ({
            id: s.id,
            name: s.name,
            minOrder: s.minOrder,
            serviceFee: s.serviceFee
        }));

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(summary));
    }

    /* ---------- SUBMIT ORDER ---------- */
    if (req.method === "POST" && pathname === "/submit-order") {
        let body = "";

        req.on("data", chunk => body += chunk);

        req.on("end", () => {
            const order = JSON.parse(body);
            orderHistory.push(order);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ status: "ok" }));
        });

        return;
    }

    /* ---------- STATS DATA ---------- */
    if (req.method === "GET" && pathname === "/stats-data") {
        const stats = {};

        streamingServices.forEach(service => {
            const name = service.name;

            let movieCount = 0;
            let revenue = 0;
            let orderCount = 0;
            const movieFreq = {};

            orderHistory.forEach(order => {
                const movies = order.movies[name];
                if (!movies || movies.length === 0) return;

                orderCount++;

                movies.forEach(m => {
                    movieCount++;
                    revenue += m.price;
                    movieFreq[m.title] = (movieFreq[m.title] || 0) + 1;
                });

                revenue += order.fees[name] || 0;
            });

            const avg = orderCount === 0 ? 0 : revenue / orderCount;

            let mostPopular = "None";
            let max = 0;
            for (const title in movieFreq) {
                if (movieFreq[title] > max) {
                    max = movieFreq[title];
                    mostPopular = title;
                }
            }

            stats[name] = {
                moviesOrdered: movieCount,
                revenue,
                averageOrder: avg,
                mostPopular
            };
        });

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(stats));
    }

    /* ---------- STATIC FILE FALLBACK ---------- */
    const filePath = path.join(__dirname, pathname);
    serveStatic(filePath, res);
}

/* ---------------- START SERVER AFTER LOAD ---------------- */
loadServices()
    .then(() => {
        http.createServer(handleRequest).listen(3000);
        console.log("Server running on http://localhost:3000");
    })
    .catch(err => console.error("Failed to load services:", err));