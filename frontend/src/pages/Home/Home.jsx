import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import Features from "../../components/Features/Features";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}