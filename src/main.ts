import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

// GET Requests
app.get("/", serveStatic({ path: "./static/index.html" }));

// POST Requests
app.post("/main", (c) => c.text("swapped!"));

Deno.serve({ port: 3000, hostname: "localhost" }, app.fetch);
