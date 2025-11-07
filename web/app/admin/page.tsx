import Heading from "@/components/Heading";
import {redirect} from "next/navigation";

export default function Page() {
    redirect("/404")
    return (<div
        className="">
        <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4">
            <Heading title={["Admin Panel"]} disableNavbar={true}/>
        </main>
        <footer>
        </footer>
    </div>)
}