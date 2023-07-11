import express from "express";

const app = express();
const users = [
    {
        id: 1,
        name: "User 1",
    },
    {
        id: 2,
        name: "User 2",
    }
]

app.get("/users", (req, res) => {
    res.send(users);
});


app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id));
    res.send(user);
});


app.listen(3002, () => {
    console.log("Users service listening on port 3002");
});