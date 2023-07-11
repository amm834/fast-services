import fastgateway from "fast-gateway";

const server = fastgateway({
    routes: [{
        prefix: "/orders",
        target: "http://localhost:3001"
    },
    {
        prefix: "/users",
        target: "http://localhost:3002"
    },
    ]
});

server.get('/ping', (req, res) => {
    res.send('pong');
});

server.start(8080).then(() => {
    console.log("API Gateway listening on port 8080");
});