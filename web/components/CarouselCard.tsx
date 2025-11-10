import ArtImage from "@/components/ArtImage";

export default function CarouselCard({filename}: { filename: string }) {
    return (<div className={"w-[32rem] h-96 m-auto object-contain shrink-0 relative"}>
        <img src={`/${filename}`}/>
    </div>)
}