'use client'

import NavBar from "@/components/NavBar";
import Heading from "@/components/Heading";
import ArtImage from "@/components/ArtImage";
import {useEffect, useState} from "react";
import {propagateImages} from "@/lib/images";
import {ImageAggregate} from "@/lib/types/images";
import Carousel from "@/components/Carousel";

export default function Home() {
    const [imageAggregates, setImageAggregates] = useState<{ [name: string]: ImageAggregate }>()
    useEffect(() => {
        propagateImages().then((res) => setImageAggregates(res))
    }, []);

    return (
        <>
            {imageAggregates &&
                <div
                    className="">
                    <main
                        className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start bg-background mx-4 mt-4 rounded-t-md pb-4">
                        <Heading title={["Fusion Academy", "-", "Student Art Gallery"]}/>
                        <div className={"w-full justify-center gap-24 flex flex-row pr-24 mt-16"}>
                            <div className={"flex w-auto h-full"}>
                            <Carousel images={[...Object.values(imageAggregates["wideImages"])]}/>
                            </div>
                            <div className={"h-auto w-auto flex flex-col align-middle zain-regular justify-center text-center"}>
                                <h2 className={"text-2xl"}>Student Art Gallery</h2>
                                <h4 className={"text-lg zain-light-italic italic"}>11/19/25</h4>
                                <p className={"text-base zain-light-italic italic"}>Buy art. Change a life.</p>

                            </div>
                        </div>
                        <div className={"grid grid-cols-3 gap-4 w-full px-4 mt-32"}>
                            {
                                Array(Object.keys(imageAggregates["tallImages"]).length - 1).fill(" ").map((val, idx) =>
                                    <ArtImage imageAggregates={imageAggregates} idx={idx} orientation={"tall"}
                                              key={"tall" + idx}/>
                                )
                            }
                        </div>
                        <div className={"grid grid-cols-3 gap-4 w-full px-4"}>
                            {
                                Array(Object.keys(imageAggregates["wideImages"]).length - 1).fill(" ").map((val, idx) =>
                                    <ArtImage imageAggregates={imageAggregates} idx={idx} orientation={"wide"}
                                              key={"wide" + idx}/>
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
