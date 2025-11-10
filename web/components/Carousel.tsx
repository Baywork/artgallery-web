import {useEffect, useState} from "react";
import CarouselCard from "@/components/CarouselCard";


export default function Carousel({images}: { images: { filename: string, usedBy: number[] }[] }) {
    const maxIndex = images.length
    const [index, setIndex] = useState(0)

    useEffect(() => {
        /*const interval = setInterval(() => {
            // console.log(`Index is set to ${((index) => index)(index)}; ${index == (maxIndex - 1)}; ${maxIndex}`)
            if (index == (maxIndex - 1)) {
                setIndex(0)
            } else {
                setIndex((index) => (index + 1) % maxIndex)
            }
        }, 2000)

        return () => {
            clearInterval(interval)
        }*/
    }, [index]);

    const incrementIndex = () => setIndex((index) => index != maxIndex ? (index + 1) % maxIndex : index)
    const decrementIndex = () => setIndex((index) => index != 0 ? (index - 1) % maxIndex : index)

    return (
        <div className={"w-full flex flex-col"}>
            <div className={"w-full flex"}>
                <button className={"bg-foreground/20 h-fit w-fit px-2 rounded-full my-auto cursor-pointer z-10 mr-[-32px]"}
                        onClick={() => decrementIndex()}>{"<"}</button>
                <div className={"bg-secondary w-[32rem] h-96 overflow-hidden relative"}>
                    <div className={"w-[32rem] h-96 flex relative"}
                         style={{transform: `translateX(-${index * 100}%)`, transition: `transform 0.5s ease-in-out`}}>
                        {
                            images.map((el, num) => <CarouselCard key={`${el.filename}:${num}`}
                                                                  filename={el.filename}/>)
                        }
                    </div>
                </div>
                <button className={"bg-foreground/20 h-fit w-fit px-2 rounded-full my-auto cursor-pointer z-10 ml-[-32px]"}
                        onClick={() => incrementIndex()}>{">"}</button>
            </div>
            <div className={"flex flex-row justify-between px-32 mt-[-20px] z-20"}>
                {
                    Array(maxIndex).fill("").map((val, num) => <button onClick={() => setIndex(num)}
                                                                       className={"w-2 h-2 rounded-full border-1 border-foreground opacity-65 cursor-pointer"}
                                                                       style={{backgroundColor: `${index == num ? "var(--foreground)" : "unset"}`}}
                                                                       key={num}/>)
                }
            </div>
        </div>)
}