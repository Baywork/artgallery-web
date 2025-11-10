import NavBar from "@/components/NavBar";

export default function Heading({title, disableNavbar = false}: { title: string[], disableNavbar?: boolean }) {

    return (
        <div className={"w-full px-12 bg-background border-contrast/15 rounded-t-md h-fit flex flex-row sticky top-0 z-30"}>
            <h1 className={"flex flex-row gap-6 text-2xl w-full justify-center items-center"}>
                {title.map((el, idx) => <a key={idx}>{el}</a>)}
            </h1>
            {(!disableNavbar) && <NavBar/>}
        </div>

    )
}