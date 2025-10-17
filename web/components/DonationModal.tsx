'use client'
import {
    EmbeddedCheckout,
    EmbeddedCheckoutProvider,
    ExpressCheckoutElement,
    PaymentElement
} from "@stripe/react-stripe-js"
import {stripe} from "@/lib/stripe";
import {CheckoutProvider} from "@stripe/react-stripe-js/checkout";
import {useEffect, useState} from "react";
const env = process.env.NODE_ENV
/*

const fetchClientSecret = fetch(env == "development" ?'http://localhost:8080/payments/checkout/create' : 'https://gallery.peletic.com/payments/checkout/create', {method: 'POST'})
    .then((response) => response.json())
    .then((json) => json.client_secret);
*/

export default function DonationModal() {
    const [clientSecret, setClientSecret] = useState();
    useEffect(() => {
        fetch(env == "development" ?'http://localhost:8080/payments/checkout/create' : 'https://gallery.peletic.com/payments/checkout/create', {method: 'POST'})
            .then((response) => response.json())
            .then((json) => setClientSecret(json.client_secret))
    }, []);
    return (
        <div> {clientSecret != null &&
            <EmbeddedCheckoutProvider stripe={stripe} options={{clientSecret: clientSecret}}>
                <EmbeddedCheckout className={"w-fit h-fit relative"}>
                </EmbeddedCheckout>
            </EmbeddedCheckoutProvider>
        }

        </div>
    )
}