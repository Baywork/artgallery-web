import {Application, Request, Response} from "express";
import * as nodePath from "node:path";
import {isSea} from "node:sea";


export class GenericContentRoute {
    private _route: string = "generic"
    private _path: string = "generic"
    methods: string = "get"

    constructor(app: Application, route : string, path : string) {
        this.route = route
        this.path = path

        app.get(this.route, this.get)
        console.log(`Registered route ${this.route}`)
    }

    get = (req: Request, res: Response) => {
        res.sendFile(`${this.path}`, {root: nodePath.join(process.cwd(), !isSea() ? "../web/out" : "web")})
    }

    get route(): string {
        return this._route;
    }

    set route(value: string) {
        this._route = value;
    }

    get path(): string {
        return this._path;
    }

    set path(value: string) {
        this._path = value;
    }
}

export abstract class ContentRoute {

    path : string = "";
    route : string = "";

    handle? : (req: Request, res: Response) => void
}
