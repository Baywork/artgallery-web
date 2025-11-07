export default function NavBarTarget({title, href, border = ""}: {
    title: string;
    href: string;
    border?: "" | "l" | "r" | "x"
}) {
    const left = border == "l" || border == "x"
    const right = border == "r" || border == "x"
    return (<div className={`h-full zain-light px-2 m-0 box-border`} style={{
        borderWidth: "0",
        borderColor: "var(tertiary)",
        borderStyle: "solid",
        borderLeftWidth: `${left ? "1px" : "0px"}`,
        borderRightWidth: `${right ? "1px" : "0px"}`,
    }
    }>
        <a href={href} className={"hover:underline"}>
            {title}
        </a>
    </div>)
}