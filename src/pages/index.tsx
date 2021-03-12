import React from "react";
import { CompleteChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";

import styles from '../styles/pages/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | Move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
