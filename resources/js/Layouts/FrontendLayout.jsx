import Footer from "@/Components/Frontend/Footer";
import Navbar from "@/Components/Frontend/Navbar";

export default function FrontendLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
