const app = require("express")();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("[ SYSTEM ] Website is now online.");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});
