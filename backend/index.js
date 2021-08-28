const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(bodyParser());
app.use(cors());

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

app.post("/removeExpense", () => {
    // TODO
});

// ############################################################

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
