import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useRouter } from 'next/navigation'
//import { useState, useEffect } from 'react'
//import HomeKnop from "../../../components/homeKnop";

export default function Page() {
    //const router = useRouter()
    //const [teamData, setTeamData] = useState(null)
    //const { id } = router
    return (
        <>
            <main className={styles.main}>
                <a href="/joinList" className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"><button>Back</button></a>
                <div>
                    <p>
                        test
                    </p>
                </div>
                <div className={styles.grid}>
                    <p> test </p>
                </div>
            </main>
        </>
    )
}
//                    <HomeKnop data={{hrefInp: "/subpages/vacatures"}}/>