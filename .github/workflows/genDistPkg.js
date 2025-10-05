const {exec} = require('child_process');
const fs = require('fs')
const admZip = require("adm-zip")

async function index() {
    if (fs.existsSync("dist")) fs.rmSync("dist", {recursive: true, force: true})
    fs.mkdirSync("dist")

    let resolve = () => {}
    const promisePkg = new Promise((res, rej) => resolve = res)
    await exec("npm run package", () => resolve())
    await promisePkg
    fs.copyFileSync("server/dist/art-gallery-server", "dist/art-gallery-server")

    const promiseWeb = new Promise((res, rej) => resolve = res)
    await exec("npm run build", () => resolve())
    await promiseWeb
    moveDir("web/out", "dist/web")


    const zip = new admZip()
    zip.addLocalFolder("dist")
    zip.writeZip("distr.zip", (cb) => {
    })
    console.log("fin")
}

function moveDir(dir, target) {
    fs.mkdirSync(dir, {recursive: true})
    fs.renameSync(dir, target)
}

index()
