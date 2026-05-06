const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const VERSION_FILE = path.join(__dirname, "version.txt");

function getVersion() {
  try {
    return fs.readFileSync(VERSION_FILE, "utf8").trim();
  } catch {
    return "unknown";
  }
}

const server = http.createServer((req, res) => {
  const version = getVersion();
  const template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  const html = template.replace('{{version}}', version);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} — version ${getVersion()}`);
});
