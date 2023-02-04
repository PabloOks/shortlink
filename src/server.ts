import "dotenv/config";
import express from "express";
import router from "./routes";

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use(router);
server.set("port", port);
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
