const app = require("express")();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("[ SYSTEM ] Website Online.");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});
