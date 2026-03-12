# Design Decisions
**1. Automatic Service Loading**

All streaming services are stored as .json files inside the streamingServices/ directory.
    At server startup:
    The directory is scanned
    Each JSON file is parsed
    All services are stored in memory
    The server starts only after loading completes


**2. Separation of Concerns**

The system is divided into:

Component	Responsibility
server.js	API endpoints, data loading, statistics tracking
interact.js	Order form UI logic
stats.js	Statistics page rendering
JSON files	Service data storage


**3. In-Memory Order History**

Orders submitted by users are stored in:
    orderHistory[]

Each order contains:
    movies grouped by streaming service
    service fees
    totals

**4. Statistics Computation Strategy**

Statistics are computed dynamically when /stats-data is requested.

For each streaming service:
    total movies ordered
    total revenue (movie prices + service fees)
    average order cost (excluding tax)
    most frequently ordered movie

**5. API-Based Client Updates**

Client-side code does NOT embed service data.

Instead:
    dropdown services fetched from /services
    selected service details fetched from /services?id=n
    statistics fetched from /stats-data
    orders submitted to /submit-order


Server API Endpoints:

GET /
Returns the Home page.

GET /order
Returns the Order Form page.

GET /stats
Returns the Statistics page.

GET /services
Returns summary of all streaming services:
id, name, minOrder, serviceFee

GET /services?id=n
Returns full service data including:
    genres
    movies
    Returns 404 if service ID is invalid.

POST /submit-order
Accepts order JSON and stores it in server memory.

GET /stats-data
Returns computed statistics for all services as JSON.

**Requirements**

You must have:

Node.js installed
A modern web browser
All project files in the same directory structure

How to Run the Server
Step 1 — Open Terminal

Navigate to the project folder:

cd path/to/project
Step 2 — Start Server
node server.js

If successful, the terminal will show:

Server running on http://localhost:3000
Step 3 — Open Application

Open your browser and visit:

http://localhost:3000
How to Use the Application
Home Page

END NOTE:
AI was used to generate the logo for the header, as well as the catowl.jpg
AI was also used for guidance in relation to the styling in the styles.css file.
