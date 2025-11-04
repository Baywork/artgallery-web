const fs = require("fs")
const path = require("node:path");
const sharp = require("sharp")

async function refactor() {
    const resourceDir = path.resolve("resources")
    const imageDir = path.resolve("resources/images")
    const imageFiles = fs.readdirSync(imageDir).map((relPath, idx) => [fs.readFileSync(path.join(imageDir, relPath)), relPath])

    if (!fs.existsSync(path.join(resourceDir, "out"))) fs.mkdirSync(path.join(resourceDir, "out"))
    if (!fs.existsSync(path.join(resourceDir, "out", "tall"))) fs.mkdirSync(path.join(resourceDir, "out", "tall"))
    if (!fs.existsSync(path.join(resourceDir, "out", "wide"))) fs.mkdirSync(path.join(resourceDir, "out", "wide"))


    let idx = 0
    for (const imageFile of imageFiles) {
        console.log(`Refactoring ${imageFile[1]}.`)
        const imageInfo = await sharp(fs.readFileSync(path.join(imageDir, imageFile[1]))).raw()
            .toBuffer({resolveWithObject: true});
        console.log(`${imageInfo.info.height}`)
        console.log(`${imageInfo.info.width}`)
        fs.writeFileSync(path.join(resourceDir, "out", `IMG_${idx}.jpg`), imageFile[0])
        if (imageInfo.info.height > imageInfo.info.width) {
            fs.writeFileSync(path.join(resourceDir, "out", "tall", `IMG_${idx}.jpg`), imageFile[0])
        } else {
            fs.writeFileSync(path.join(resourceDir, "out", "wide", `IMG_${idx}.jpg`), imageFile[0])
        }
        idx++
    }
    console.log("Completed refactoring")
}

refactor()