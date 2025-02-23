"use client";
import Image from "next/image";
import styles from "./page.module.css";

import Navbar from "./components/Navbar/Navbar";
import HomeHero from "./components/HomeHero/HomeHero";
import ChatBox from "./components/ChatBox/ChatBox";
import { useState } from "react";

export default function Home() {

  const [started, setStarted] = useState(false);

  return (
    <div className={""}>
      <Navbar />
      <main>
        <HomeHero started={started} />
        <ChatBox started={started} setStarted={setStarted} />
      </main>
    </div>
  );
}
