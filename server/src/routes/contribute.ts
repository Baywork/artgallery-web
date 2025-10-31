import {contentRoute} from "@/lib/routing"
import {ContentRoute} from "@/lib/routing/contentRoute";


@contentRoute()
export class Contribute implements ContentRoute {
    public route: string = "/contribute";
    path: string = "contribute";
}