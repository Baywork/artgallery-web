import {getFirestore} from "firebase-admin/firestore";
import * as sea from "node:sea";
import {firebaseApp} from "@/lib/firebase";

const db = getFirestore(firebaseApp)

function getWorkspace(): "prod" | "dev" {
    const compiled = sea.isSea()
    return compiled ? "prod" : "dev"
}

export async function put(path: string, key: string, data: any, workspaceOverride?: undefined | "dev" | "prod") {
    const workspace = workspaceOverride ? workspaceOverride : getWorkspace();
    if (!path.startsWith("dev") && !path.startsWith("prod")) path = `${workspace}/${path}`
    try {
        const docRef = db.collection(`gallery/${path}`).doc(key)
        const docSnap = await docRef.get()

        if (docSnap.exists) {
            if (workspace == "dev") {
                if (docSnap.data() === data) {
                    throw new Error("doc entry duplicate")
                }
                throw new Error("doc already exists")
            }
            return -1
        }

        await docRef.set(data)
        return 0
    } catch (e) {
        console.error(e)
    }
    return -1
}