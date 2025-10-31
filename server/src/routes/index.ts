import {Application, Request, Response} from "express";
import {contentRoute, route} from "@/lib/routing"

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
import {ContentRoute} from "@/lib/routing/contentRoute";

@contentRoute()
export class Index extends ContentRoute{
    route = "/"
    path = ""
}

export {}