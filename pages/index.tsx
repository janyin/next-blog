import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Red Yin - 刘江杜</title>
                <meta name="description" content="good for you" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.circlesContainer}>
                    <div className={styles.circles}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <span></span>
                    </div>
                </div>

                <div className={styles.grid}>
                    <a href="/experience" className={styles.card}>
                        <h2 className={inter.className}>
                            Experience <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            My work experience as software engineer
                        </p>
                    </a>

                    <a href="/blog" className={styles.card}>
                        <h2 className={inter.className}>
                            Blog <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Some of my thoughts and ideas about software
                            development and life
                        </p>
                    </a>

                    <a href="/community" className={styles.card}>
                        <h2 className={inter.className}>
                            Community <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            My open source projects and contributions in Github
                            and StackOverflow
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}
