import {Application, Request, Response} from "express";
import {route} from "@/lib/routing"

import "@/lib/routing"
import "@/routes/ping"
import "@/routes/upload"
import "@/routes/payments/checkout"
import "@/routes/about"
import "@/routes/contribute"
import "@/routes/payments/checkout/create"
import "@/routes/admin/auth"
import path from "node:path";
import {isSea} from "node:sea";

@route()
export class Index {
    route = "/"
    methods = ["get"]

    constructor(app: Application) {
        app.get(this.route, this.get)
        console.log(`Registered route ${this.route}`)
    }

    get(req: Request, res: Response) {
        res.sendFile("index.html", {root: path.join(process.cwd(), !isSea() ? "../web/out" : "web")})
    }
}

export {}