'use client'

import NavBar from "@/components/NavBar";
import Heading from "@/components/Heading";
import ArtImage from "@/components/ArtImage";
import {useEffect, useState} from "react";
import {propagateImages} from "@/lib/images";
import {ImageAggregate} from "@/lib/types/images";

export default function Home() {
    const [imageAggregates, setImageAggregates] = useState<{[name : string] : ImageAggregate}>()
    useEffect(() => {
        propagateImages().then((res) => setImageAggregates(res))
    }, []);

    return (
        <>
            {imageAggregates &&
                <div
                    className="">
                    <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4">
                        <Heading title={["Fusion Academy", "-", "Student Art Gallery"]}/>
                        <div>

                        </div>
                        <div className={"grid grid-cols-5 gap-4 w-full"}>

                            {
                                Array(Object.keys(imageAggregates["wideImages"]).length).fill(" ").map((val, idx) =>
                                    <ArtImage imageAggregates={imageAggregates} idx={idx} orientation={"wide"} key={"wide" + idx}/>
                                )
                            }
                            {
                                Array(Object.keys(imageAggregates["tallImages"]).length).fill(" ").map((val, idx) =>
                                    <ArtImage imageAggregates={imageAggregates} idx={idx} orientation={"tall"} key={"tall" + idx}/>
                                )
                            }
                        </div>
                    </main>
                    <footer>
                    </footer>
                </div>
            }
        </>);
}
