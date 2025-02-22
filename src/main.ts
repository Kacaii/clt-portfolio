import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));
app.use("/static/css/*", serveStatic({ root: "./css" }));

app.get("/", serveStatic({ path: "./static/index.html" }));

app.post("/clicked", (c) => c.text("Hello Hono! You <b>clicked</b> me!"));

Deno.serve({ port: 3000, hostname: "localhost" }, app.fetch);
