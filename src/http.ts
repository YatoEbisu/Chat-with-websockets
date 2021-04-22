import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io'
import path from "path"
import cors from 'cors'

import './database';
import { routes } from './routes'

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", (req, res) =>{
    return res.render("html/client.html")
})

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Se conectou", socket.id)
})

app.use(express.json());

app.use(routes);

export { http, io }