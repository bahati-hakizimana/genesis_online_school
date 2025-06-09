import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import StudStories from "./pages/StudStories";

const HomeGuest = () =>{
    return(
        <>
        {/* <Header /> */}
        <Navbar />
        <Hero />
        <Experience />
        <StudStories />
        <Footer />
        </>
    )
}
export default HomeGuest;