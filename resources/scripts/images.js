const fs = require("fs")
const path = require("node:path");
const sharp = require("sharp")

async function refactor() {
    const resourceDir = path.resolve("resources")
    const imageDir = path.resolve("resources/images")
    const imageFiles = fs.readdirSync(imageDir).map((relPath, idx) => [fs.readFileSync(path.join(imageDir, relPath)), relPath])

    const tallImages = [];
    const wideImages = [];
    const images = [];

    if (fs.existsSync(path.join(resourceDir, "out"))) fs.rmSync(path.join(resourceDir, "out"), {recursive: true});
    fs.mkdirSync(path.join(resourceDir, "out"))

    let idx = 0
    for (const imageFile of imageFiles) {
        console.log(`Refactoring ${imageFile[1]}.`)
        const imageInfo = await sharp(fs.readFileSync(path.join(imageDir, imageFile[1]))).raw()
            .toBuffer({resolveWithObject: true});
        console.log(`${imageInfo.info.height}`)
        console.log(`${imageInfo.info.width}`)
        fs.writeFileSync(path.join(resourceDir, "out", `IMG_${idx}.jpg`), imageFile[0])
        images.push(`IMG_${idx}.jpg`)
        if (imageInfo.info.height > imageInfo.info.width) {
            fs.writeFileSync(path.join(resourceDir, "out", `IMG_TALL_${idx}.jpg`), imageFile[0])
            tallImages.push(`IMG_TALL_${idx}.jpg`)
        } else {
            fs.writeFileSync(path.join(resourceDir, "out", `IMG_WIDE_${idx}.jpg`), imageFile[0])
            wideImages.push(`IMG_WIDE_${idx}.jpg`)
        }
        idx++

        fs.writeFileSync(path.join(resourceDir, "out", "images.json"), JSON.stringify(images));
        fs.writeFileSync(path.join(resourceDir, "out", "wide_images.json"), JSON.stringify(wideImages));
        fs.writeFileSync(path.join(resourceDir, "out", "tall_images.json"), JSON.stringify(tallImages));
    }
    console.log("Completed refactoring")
}

refactor()