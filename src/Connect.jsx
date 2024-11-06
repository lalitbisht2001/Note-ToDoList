import { useState } from "react";
import Main from "./COMPONENTS/MAIN/Main"
import Navbar from "./COMPONENTS/NAVBAR/Navbar"
import Footer from "./COMPONENTS/FOOTER/Footer";

const Connect = () => {
    const [Open, setOpen] = useState(false);
    const handleMenubar = () => {
        setOpen((prev => !prev));
    }
    return (
        <>
            <Navbar Open={Open} handleMenubar={handleMenubar} />
            <Main Open={Open} />
            <Footer />
        </>
    )
}

export default Connect