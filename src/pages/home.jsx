import React from "react";
import TopBar from "../components/home/TopBar";
import HeroCarousel from "../components/home/HeroCarousel";
import Intro from "../components/home/Intro";
import ConoceMas from "../components/home/ConoceMas";
import CursosDestacados from "../components/home/CursosDestacados";
import Tecnicas from "../components/home/Tecnicas";
import AllNewMakeup from "../components/home/AllNewMakeup";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
    return (
        <main>
            <TopBar />
            <HeroCarousel />
            <Intro />
            <ConoceMas />
            <CursosDestacados />
            <Tecnicas />
            <AllNewMakeup />
            <Newsletter />
        </main>
    );
};

export default Home;
