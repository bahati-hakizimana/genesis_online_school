import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import StudStories from "./pages/StudStories";
import Feature from "./pages/Feature";
import Path from "./pages/Path";

const HomeGuest = () =>{
    return(
        <>
        {/* <Header /> */}
        <Navbar />
        <Hero />
        <Feature />
        <Path />
        <Experience />
        <StudStories />
        <Footer />
        </>
    )
}
export default HomeGuest;