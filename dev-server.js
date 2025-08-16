const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const PORT = process.env.PORT || 3000;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "dist"));
liveReloadServer.watch(path.join(__dirname, "index.html"));
liveReloadServer.watch(path.join(__dirname, "src"));

app.use(connectLivereload());
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`);
});

devServerReload = () => liveReloadServer.refresh("/");
liveReloadServer.server.once("connection", () => {
  setTimeout(devServerReload, 100);
});
