import HeadMeta from "@/components/headMeta";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function joinList() {
    return (
        <>
            <Head>
                <title>Vacatures</title>
                <meta name="description" content = "select your job" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-between p-5">
                <a href="/" className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"><button>Home</button></a>
                <div className={styles.grid}>
                    <Link
                        href={`/detail/vacature?id=${encodeURIComponent("webDesign")}`}
                        key={1}
                        className={styles.card}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            dit is een beschrijving  <span>-&gt;</span>
                        </h2>
                        <p>
                            van <br/>
                            een super toffe <br/>
                            job
                        </p>
                    </Link>
                    <Link
                        href={`/detail/vacature?id=${encodeURIComponent("webDesign")}`}
                        key={1}
                        className={styles.card}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            dit is een beschrijving  <span>-&gt;</span>
                        </h2>
                        <p>
                            van <br/>
                            een super toffe <br/>
                            job
                        </p>
                    </Link>
                    <Link
                        href={`/detail/vacature?id=${encodeURIComponent("webDesign")}`}
                        key={1}
                        className={styles.card}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            dit is een beschrijving  <span>-&gt;</span>
                        </h2>
                        <p>
                            van <br/>
                            een super toffe <br/>
                            job
                        </p>
                    </Link>
                    <Link
                        href={`/detail/vacature?id=${encodeURIComponent("webDesign")}`}
                        key={1}
                        className={styles.card}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            dit is een beschrijving  <span>-&gt;</span>
                        </h2>
                        <p>
                            van <br/>
                            een super toffe <br/>
                            job
                        </p>
                    </Link>
                    <Link
                        href={`/detail/vacature?id=${encodeURIComponent("webDesign")}`}
                        key={1}
                        className={styles.card}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            dit is een beschrijving  <span>-&gt;</span>
                        </h2>
                        <p>
                            van <br/>
                            een super toffe <br/>
                            job
                        </p>
                    </Link>
                    <Link
                        href={`/detail/vacature?id=${encodeURIComponent("webDesign")}`}
                        key={1}
                        className={styles.card}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            dit is een beschrijving  <span>-&gt;</span>
                        </h2>
                        <p>
                            van <br/>
                            een super toffe <br/>
                            job
                        </p>
                    </Link>
                    <Link
                        href={`/detail/vacature?id=${encodeURIComponent("webDesign")}`}
                        key={1}
                        className={styles.card}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            dit is een beschrijving  <span>-&gt;</span>
                        </h2>
                        <p>
                            van <br/>
                            een super toffe <br/>
                            job
                        </p>
                    </Link>
                    <Link
                        href={`/detail/vacature?id=${encodeURIComponent("webDesign")}`}
                        key={1}
                        className={styles.card}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            dit is een beschrijving  <span>-&gt;</span>
                        </h2>
                        <p>
                            van <br/>
                            een super toffe <br/>
                            job
                        </p>
                    </Link>
                    <Link
                        href={`/detail/vacature?id=${encodeURIComponent("webDesign")}`}
                        key={1}
                        className={styles.card}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            dit is een beschrijving  <span>-&gt;</span>
                        </h2>
                        <p>
                            van <br/>
                            een super toffe <br/>
                            job
                        </p>
                    </Link>
                </div>
            </main>
        </>
    )
}

/*
                   <CreeerKnop data={{hrefInp: "/create/vacature"}}/>
                    {
                        teamData.map((team,index) => (
                            <Link
                                href={`/detail/vacature?id=${encodeURIComponent(team[0].url)}`}
                                key={index}
                                className={styles.card}
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                <h2 className={inter.className}>
                                    {team[0].description}  <span>-&gt;</span>
                                </h2>
                                <p className={inter.className}>
                                    {team[1].name}, {team[2].name} <br/>
                                    salary: {team[0].salaryMin} - {team[0].salaryMax} <br/>
                                    req: {team[0].requirements.join(", ")}
                                </p>
                            </Link>
                        ))
                    }
 */
