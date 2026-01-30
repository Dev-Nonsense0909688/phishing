import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("========================================")
  console.log("IP:",
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress
  );
  console.log("UA:", req.headers["user-agent"]);

  res.sendFile(new URL("./index.html", import.meta.url).pathname);
});

app.post("/client-log", (req, res) => {
  console.log("Client data:", req.body);
  console.log("=======================================")
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
