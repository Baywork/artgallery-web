import {RouterConstructor} from "@/index";
import {GenericContentRoute} from "@/lib/routing/contentRoute";
import {Application} from "express";
import firebase from "firebase/compat/app";

export function route() {
    return function (target: Function) {
        decoratedRoutes.push(<RouterConstructor>target);
    }
}

export function contentRoute() {
    return function (target : InstanceType<any>) {
        const instance = new target;
        const genClass = class ContentPath extends GenericContentRoute {
            constructor(app: Application) {
                super(app, instance["route"], instance["path"]);
            }
        }

        decoratedRoutes.push(genClass)
    }
}

export const decoratedRoutes: RouterConstructor[] = []