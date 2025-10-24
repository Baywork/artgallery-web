import NavBar from "@/components/NavBar";
import ArtSubmissionForm from "@/components/ArtSubmissionForm";
import {loadStripe} from "@stripe/stripe-js";
import DonationModal from "@/components/DonationModal";
import Heading from "@/components/Heading";

export default function Page() {
    return (<div
        className="">
        <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4">
            <Heading title={["Contribute"]}/>
            <div className={"flex flex-col w-fit h-full"}>
                <DonationModal/>
            </div>
        </main>
        <footer>
        </footer>
    </div>)
}