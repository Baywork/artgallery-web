import {Application, Request, Response} from "express";
import {route} from "@/lib/routing";

@route()
export class Ping {
    route = "/admin/auth"
    methods = ["get"]

    constructor(app: Application) {
        app.get(this.route, this.get)
        console.log(`Registered route ${this.route}`)
    }

    get(req: Request, res: Response) {
        res.send("Hello world")
    }
}