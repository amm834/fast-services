import express from "express";

const app = express();

const orders = [
    {
        id: 1,
        name: "Order 1",
    },
    {
        id: 2,
        name: "Order 2",
    },
    {
        id: 3,
        name: "Order 3",
    },
]


app.get("/orders", (req, res) => {
    res.send("Orders");
});

app.get("/orders/:id", (req, res) => {
    const { id } = req.params;
    const order = orders.find((order) => order.id === parseInt(id));
    res.send(order);
});

app.listen(3001, () => {
    console.log("Orders service listening on port 3001");
});