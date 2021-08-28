const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser());

// ############################################################

app.post("/inputBudget", (req, res) => {
    // TODO
});

app.get("/getBalance", (req, res) => {
    // TODO
});

app.post("/expense", () => {
    // TODO
});

app.post("/editExpense", () => {
    // TODO
})

add.post("/removeExpense", () => {
    // TODO
});

// ############################################################

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
