import {ImageAggregate} from "@/lib/types/images";

export const images: ImageAggregate = {};
export const wideImages: ImageAggregate = {};
export const tallImages: ImageAggregate = {};

export const imageAggregates: {[name : string]: ImageAggregate} = {
    images,
    wideImages,
    tallImages
}

export async function propagateImages() {
    if (Object.keys(images).length > 0) return imageAggregates;

    const idx = await (await fetch("/images.json")).json();
    const wideIdx = await (await fetch("/wide_images.json")).json();
    const tallIdx = await (await fetch("/tall_images.json")).json();

    [...idx].forEach((el, n) => {
        images[n] = {
            filename: el,
            usedBy: []
        }
    });

    [...wideIdx].forEach((el, n) => {
        wideImages[n] = {
            filename: el,
            usedBy: []
        }
    });

    [...tallIdx].forEach((el, n) => {
        tallImages[n] = {
            filename: el,
            usedBy: []
        }
    });

    return imageAggregates;
}