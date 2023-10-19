import Image from 'next/image'
import Navbar from "../../components/navbar";

function page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-5">
            <Navbar></Navbar>
            <p> test </p>
        </main>
    )
}

export default page;
