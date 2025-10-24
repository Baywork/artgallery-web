import Heading from "@/components/Heading";

export default function Page() {
    return (<div
        className="">
        <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4">
            <Heading title={["Admin Panel"]} disableNavbar={true}/>
        </main>
        <footer>
        </footer>
    </div>)
}