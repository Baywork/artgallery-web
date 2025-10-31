import {Application, Request, Response} from "express";
import path from "node:path";
import {isSea} from "node:sea";
import {contentRoute, route} from "@/lib/routing"
import {ContentRoute} from "@/lib/routing/contentRoute";

@contentRoute()
export class About implements ContentRoute{
    route = "/about"
    path = "about"
}