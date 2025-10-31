const fs = require("fs")
const path = require("node:path");

function refactor() {
    const resourceDir = path.resolve("resources")
    const imageDir = path.resolve("resources/images")
    const imageFiles = fs.readdirSync(imageDir).map((relPath, idx) => [fs.readFileSync(path.join(imageDir, relPath)), relPath])

    if (!fs.existsSync(path.join(resourceDir, "out"))) fs.mkdirSync(path.join(resourceDir, "out"))

    let idx = 0
    for (const imageFile of imageFiles) {
        console.log(`Refactoring ${imageFile[1]}.`)

        fs.writeFileSync(path.join(resourceDir, "out", `IMG_${idx}.jpg`), imageFile[0])

        idx++
    }
    console.log("Completed refactoring")
}

refactor()