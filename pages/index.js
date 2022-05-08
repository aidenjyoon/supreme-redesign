import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Logo from "../components/Logo";

export default function Home() {
  dayjs.extend(utc);
  dayjs.extend(timezone); // needs utc
  const [currTime, setCurrTime] = useState("");

  // auto refreshes every second to display time in new york
  useEffect(() => {
    setInterval(() => {
      setCurrTime(dayjs().tz("America/New_York").format("MM/DD/YYYY, h:mma"));
    }, 1000);
  }, [currTime]);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="supremenewyork.com redesign" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Logo />

          <nav className={styles.menu}>
            <ul>
              <li>
                <Link href="/">news</Link>
              </li>
              <li>
                <Link href="/">sprint/summer 2022 preview</Link>
              </li>
              <li>
                <Link href="/">sprint/summer 2022 lookbook</Link>
              </li>
              <li>
                <Link href="/">shop</Link>
              </li>
              <li>
                <Link href="/">random</Link>
              </li>
              <li>
                <Link href="/">about</Link>
              </li>
              <li>
                <Link href="/">stores</Link>
              </li>
              <li>
                <Link href="/">contact</Link>
              </li>
              <li>
                <Link href="/">mailinglist</Link>
              </li>
            </ul>

            <div className={styles.socials}>
              <Link href="/">facebook</Link>
              <Link href="/">instagram</Link>
              <Link href="/">weibo</Link>
              <Link href="/">itunes</Link>
            </div>
          </nav>
        </main>

        <footer className={styles.footer}>asdf</footer>
      </div>
    </>
  );
}
