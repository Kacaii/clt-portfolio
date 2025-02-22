import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", serveStatic({ path: "./static/index.html" }));

Deno.serve({ port: 3000, hostname: "localhost" }, app.fetch);
