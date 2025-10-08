import {Application, Request, Response} from "express";
import {route} from "@/lib/routing";
import {put} from "@/lib/helpers/firebase"

@route()
export class Upload {
    route = "/upload"
    methods = ["post"]

    constructor(app: Application) {
        app.post(this.route, this.post)
        console.log(`Registered route ${this.route}`)
    }

    post(req: Request, res: Response) {
        console.log(req.body)
        put("payments", "paymentEmit", req.body)
        console.log('received msg on upload')
        res.send("Hello world")
    }
}