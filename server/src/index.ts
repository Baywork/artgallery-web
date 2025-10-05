console.log("0")
import express, {Application} from "express"
import "@/lib/util/log";
import {decoratedRoutes} from "@/lib/routing";
import "@/routes"
console.log("1")
import "@/lib/firebase"
console.log("2")
import * as firebase from "@/lib/helpers/firebase"
console.log("3")
import {isSea} from "node:sea";
import path from "node:path";
console.log("4")

const app = express()
const port = 8080
const devEnvironment = !isSea();
console.log("5")

if (!devEnvironment) {
    require("module").createRequire()
}
console.log("6")

app.use(express.json())

const configureRoutes = (app: Application) => {
    const router = express.Router();
    const routes = {}
    app.use("/", (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next()
    })
    app.use('/', router)
    app.use(express.static(path.join(__dirname + devEnvironment ? "../web/out" : "/web")))

    app.get("/", (req, res) => {
        res.sendFile("index.html", {root: devEnvironment ? "../web/out" : "./web"})
    })

    decoratedRoutes.forEach(Route => {
        const instance = new Route(app)
        // @ts-ignore
        routes[instance["route"]] = instance
    })

    app.get("/routes", (req, res) => {
        res.send(JSON.stringify(routes, null, 4))
    })
}
configureRoutes(app)


export interface RouterConstructor {
    new(app: Application): any
}

app.listen(port, () => {
    console.log(`Prepared on port ${port} (http://${"localhost:" + port}/)`)
})
