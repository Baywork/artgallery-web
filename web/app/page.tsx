import NavBar from "@/components/NavBar";
import Heading from "@/components/Heading";

export default function Home() {

    return (
        <div
            className="">
            <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4">
                <Heading title={["Fusion Academy", "-", "Student Art Gallery"]}/>
                <div>

                </div>
                <div className={"grid grid-cols-5 gap-4 w-full"}>
                {
                    Array(21).fill(" ").map((val, idx) => <img src={`/IMG_0${idx+683}.jpg`} key={idx}/>)
                }
                </div>
            </main>
            <footer>
            </footer>
        </div>
    );
}
