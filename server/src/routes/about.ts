import {Application, Request, Response} from "express";
import path from "node:path";
import {isSea} from "node:sea";
import {route} from "@/lib/routing"

@route()
export class About {
    route = "/about"
    methods = ["get"]

    constructor(app: Application) {
        app.get(this.route, this.get)
        console.log(`Registered route ${this.route}`)
    }

    get(req: Request, res: Response) {
        res.sendFile("about.html", {root: path.join(process.cwd(), !isSea() ? "../web/out" : "web")})
    }
}