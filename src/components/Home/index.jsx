import React from "react";
import "../../css/home.css";
/*
------------------------------------
----------- Import Pages -----------
------------------------------------
*/
import Header from "../../pages/Header";
import Navbar from "../../pages/Navbar";
import Results from "../../pages/Results";
import ProjectCost from "../../pages/Project Cost";
import MainServices from "../../pages/Main Sevices";
import OurProject from "../../pages/Our Projects";
import Applying from "../../pages/Applying";
import WeAreWhere from "../../pages/We Are Where";
import InstagramProfile from "../../pages/Istagram Profile";
import CatalogProjects from "../../pages/Catalog Projects";
import Footer from "../../pages/Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        {/* ---------- Add Navbar  ------------ */}
        <Navbar />
        {/* ---------- Add Header  ------------ */}
        <Header />
      </div>
      {/* ---------- Add Results  ----------- */}
      <Results />
      {/* ---------- Add Project Cost  ------------ */}
      <ProjectCost />
      {/* ---------- Add Main Services  ------------ */}
      <MainServices />
      {/* ---------- Add Our Project  ------------ */}
      <OurProject />
      {/* ---------- Applying Project  ------------ */}
      <Applying />
      {/* ---------- We Are Where Project  ------------ */}
      <WeAreWhere />
      {/* ---------- Instagram Profile Project  ------------ */}
      <InstagramProfile />
      {/* ---------- Catalog Projects Project  ------------ */}
      <CatalogProjects />
      {/* ---------- Footer Project  ------------ */}
      <Footer />
    </>
  );
}
