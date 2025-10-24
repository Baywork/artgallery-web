export default function Footer() {
    return (
        <div className={"grid grid-cols-4 w-full m-0 p-24 border-t-2 justify-self-end min-h-24 border-white/30 bg-white/5"}>
            <div className={"flex flex-col"}>
                <a href={"/admin"}>Admin</a>
            </div>
        </div>
    )
}