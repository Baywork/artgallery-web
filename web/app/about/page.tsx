import Heading from "@/components/Heading";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Page() {
    return (<div
        className="">
        <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4 text-xl">
            <Heading title={["What We Do"]}/>
            <div className={"flex flex-row-reverse justify-between mx-auto w-2/3 border-foreground mt-4"}>
                <div className={"text-2xl px-12 flex flex-col min-w-1/3 max-w-64 mx-auto my-auto text-center"}>
                    <p>
                        Every purchase helps funds art supplies & workshops for children in underserved rural areas.
                    </p>
                </div>
                <img src={"/IMG_0683.jpg"} alt={""} className={"w-auto max-h-96 object-cover"}/>
            </div>

            <div className={"flex flex-row justify-between mx-auto w-2/3 border-foreground mt-4"}>

                <div className={"text-2xl px-12 flex flex-col w-full h-full mx-auto my-auto text-center align-text-top"}>

                    All artwork proceeds go towards <a href={"https://makeanartist.org/"}
                                                       className={"font-semibold"}>Make an Artist Foundation</a>
                </div>
                <img
                    src={"https://images.squarespace-cdn.com/content/v1/608d0858db2f4c6cd9107d70/cec0be82-903d-4423-8586-e752c8cb9390/share-BANNER.jpg"}
                    alt={""}
                    className={"w-auto max-h-80 object-cover"}/>
            </div>
        </main>
        <footer>
        </footer>
    </div>)
}