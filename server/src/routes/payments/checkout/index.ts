import {Application, Request, Response} from "express";
import {route} from "@/lib/routing";
import {put} from "@/lib/helpers/firebase";

@route()
export class Upload {
    route = "/payments/checkout"
    methods = ["post"]

    constructor(app: Application) {
        app.post(this.route, this.post)
        console.log(`Registered route ${this.route}`)
    }

    async post(req: Request, res: Response) {
        const stat = await put("payments", req.body.data.object.id || `ts_${new Date().getUTCMilliseconds()}`, req.body)
        if (stat == -1) {
            res.sendStatus(501)
            return
        }
        console.log(req.body)
        console.log('received msg on upload')
        res.sendStatus(200)
        return
    }
}