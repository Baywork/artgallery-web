import NavBar from "@/components/NavBar";
import ArtSubmissionForm from "@/components/ArtSubmissionForm";
import {loadStripe} from "@stripe/stripe-js";
import DonationModal from "@/components/DonationModal";

export default function Page() {
    return (<div
        className="">
        <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4">
            <div className={"w-full px-12 border-b-[0.5px] py-4 border-white/10 h-fit flex flex-row-reverse"}>
                <NavBar/>
                <h1 className={"flex flex-row gap-6 text-3xl w-full justify-start items-center"}>
                    <a>CONTRIBUTE</a>
                </h1>
            </div>
            <div className={"flex flex-col w-fit h-full"}>
                <DonationModal/>
            </div>
        </main>
        <footer>
        </footer>
    </div>)
}