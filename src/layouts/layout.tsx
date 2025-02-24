import React, { ReactNode, useState } from 'react';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import * as mui from "@mui/material";
import MyProfile from '@/components/MyProfile';
import About from "@/components/about"
import Home from '@/components/home';
import Contact from '@/components/contact';
interface LayoutProps {
    children: ReactNode;
}


function Layouts({ children }: LayoutProps) {
    const [selectedSection, setSelectedSection] = useState("home");
    console.log('selectedSectionselectedSectionselectedSection', selectedSection === "about");
    return (
        <>
            <mui.Grid
                container
                spacing={0}
                sx={{
                    m: 0,
                    p: 0,
                    width: "100vw",
                    // height: "100vh",
                    // overflow: "hidden"
                }}
            >
                <mui.Grid
                    item
                    xs={12}
                    sx={{
                        m: 0,
                        p: 0,
                        width: "100%",
                        // height: "100px" // Adjust height as needed for the header
                    }}
                >
                    <Header onSelect={setSelectedSection} />
                </mui.Grid>

                <mui.Grid
                    item
                    xs={12}
                    sx={{
                        m: 0,
                        p: 0,
                        width: "100%",
                        // overflow:"hidden",
                        overflowX: "auto",
                        height: "calc(100vh - 100px)" // Remaining height for content
                    }}
                >
                    {/* Content goes here */}
                    {selectedSection === "home" && <Home onSelect={setSelectedSection}/>}
                    {selectedSection === "about" && <About />}
                    {/* {selectedSection === "about" && < Contact  />} */}
                    {/* {selectedSection === "contact" && <Contact />}
                    {selectedSection === "experience" && <Experience />} */}
                </mui.Grid>
            </mui.Grid>

        </>
    );
}

export default Layouts;
