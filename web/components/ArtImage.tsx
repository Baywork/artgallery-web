'use client'

import {ImageAggregate} from "@/lib/types/images";
import Image from "next/image";


export default function ArtImage({imageAggregates, idx, orientation, random = false}: {
    imageAggregates: { [aggregateName: string]: ImageAggregate },
    idx?: number,
    orientation?: string,
    random?: boolean
}) {

    // @ts-ignore
    const {images, tallImages, wideImages}: {
        images: ImageAggregate,
        tallImages: ImageAggregate,
        wideImages: ImageAggregate
    } = {...imageAggregates}

    const toDisplay = idx != undefined ?
        (orientation == "tall" ? tallImages[parseInt(`${Object.keys(tallImages)[idx]}`)]
            : orientation == "wide" ? wideImages[parseInt(`${Object.keys(wideImages)[idx]}`)]
                : images[parseInt(`${Object.keys(images)[idx]}`)])
        : images[parseInt(`${Object.keys(images)[0]}`)]

    return (
        <div>
            <img src={toDisplay.filename} alt={toDisplay.filename}/>
        </div>
    )
}