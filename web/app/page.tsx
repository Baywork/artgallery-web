import NavBar from "@/components/NavBar";
import Heading from "@/components/Heading";

export default function Home() {
    return (
        <div
            className="">
            <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4">
                <Heading title={["Fusion Academy", "-", "Student Art Gallery"]}/>
            </main>
            <footer>
            </footer>
        </div>
    );
}
