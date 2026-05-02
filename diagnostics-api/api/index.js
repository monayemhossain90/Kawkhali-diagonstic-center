const app = require("../app.js");


app.get("/", (req, res) => {
    res.send("This is Diagnostics Api")
})


module.exports = app;