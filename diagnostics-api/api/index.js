const app = require("../app.js");
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("This is Diagnostics Api")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;