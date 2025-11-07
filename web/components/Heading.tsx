import NavBar from "@/components/NavBar";

export default function Heading({title, disableNavbar = false}: { title: string[], disableNavbar?: boolean }) {

    return (
        <div className={"w-full px-12 border-b-[0.5px] py-4 border-contrast bg-secondary rounded-t-md h-fit flex flex-row"}>
            <h1 className={"flex flex-row gap-6 text-4xl w-full justify-center items-center"}>
                {title.map((el, idx) => <a key={idx}>{el}</a>)}
            </h1>
            {(!disableNavbar) && <NavBar/>}
        </div>

    )
}