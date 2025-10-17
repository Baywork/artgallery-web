// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
import {Application, Request, Response} from "express";
import {route} from "@/lib/routing";

const stripe = require('stripe')(process.env.PRIVATE_STRIPE_KEY);

@route()
export class Ping {
    route = "/payments/checkout/create"
    methods = ["get"]

    constructor(app: Application) {
        app.get(this.route, this.get)
        app.post(this.route, this.get)
        console.log(`Registered route ${this.route}`)
    }

    async get(req: Request, res: Response) {
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            phone_number_collection: {enabled: false},
            ui_mode: 'embedded',
            redirect_on_completion: 'never',
            payment_method_types: ['card'],
            line_items: [
                {
                    price: 'price_1SJKVOL4KDjhqgOi7fq0PNg9',
                    quantity: 1,
                },
            ],
        });
        res.send(session)
    }
}