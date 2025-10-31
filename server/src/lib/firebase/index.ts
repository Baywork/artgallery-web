import * as admin from "firebase-admin/app";
import * as dotenv from "dotenv"
import * as sea from "node:sea";

admin
if (!sea.isSea()) {
    dotenv.config({path: "../.env"})
} else {
    dotenv.config()
}

if (process.env.SERVICE_ACCOUNT_KEY === undefined) {
    throw new Error("Define SERVICE_ACCOUNT_KEY in .env file.")
}

const serviceAccountKey = JSON.parse(process.env.SERVICE_ACCOUNT_KEY)

export const firebaseApp = admin.initializeApp({
    credential: admin.cert(serviceAccountKey)
})
