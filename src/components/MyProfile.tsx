import * as mui from "@mui/material";
import Sreedharimages from "../Assets/sreedhar.png"
import myImages from "../Assets/sreedhar-removebg.png"
import { useEffect, useState, useRef } from "react";
function MyProfile() {

    // Email Me Function //
    const [isScrolled, setIsScrolled] = useState(false);
    const backgroundRef: any = useRef(null);
    const experienceRef: any = useRef(null);
    const projectRef: any = useRef(null);
    const contactRef: any = useRef(null)
    const nameRef: any = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Check if there's a hash in the URL indicating scroll target
        const hash = window.location.hash.substring(1);
        if (hash === 'aboutme') {
            scrollToBackground();
        } else if (hash === 'experience') {
            scrollToExperience();
        }
        else if (hash === 'project') {
            scrollToProject()
        }
        else if (hash === 'contacts') {
            scrollToContacts()
        }
        else if (hash === 'sreedhar') {
            scrollToName()
        }
    }, []);

    const scrollToBackground = () => {
        if (backgroundRef.current) {
            backgroundRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, '', '#aboutme');
        }
    };

    const scrollToExperience = () => {
        if (experienceRef.current) {
            experienceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, '', '#experience');
        }
    };
    const scrollToProject = () => {
        if (projectRef.current) {
            projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, '', '#project');
        }
    };
    const scrollToContacts = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, '', '#contacts');
        }
    };
    const scrollToName = () => {
        if (nameRef.current) {
            nameRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, '', '#contacts');
        }
    };

    const handleAboutMeClick = (event: any) => {
        event.preventDefault();
        scrollToBackground();
    };

    const handleExperienceClick = (event: any) => {
        event.preventDefault();
        scrollToExperience();
    };
    const handleProjectClick = (event: any) => {
        event.preventDefault();
        scrollToProject();
    };
    const handleContactClick = (event: any) => {
        event.preventDefault();
        scrollToContacts();
    };
    const handleNameClick = (event: any) => {
        event.preventDefault();
        scrollToName();
    };



    return (
        <>
            <mui.Box
                sx={{
                    minHeight: '100vh',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    background: 'linear-gradient(to bottom, #ADD8E6 30%, #FFFFFF 70%)',
                    // background: 'linear-gradient(to bottom, #ADD8E6 26%, #FFFFFF 26%)',
                    color: '#000000',
                    // overflowX:'hidden',
                    boxSizing: 'border-box',

                }}
            >
                <mui.Grid ref={nameRef}></mui.Grid>
                <mui.Box
                    sx={{
                        width: '100%',
                        position: 'sticky',
                        top: 0,
                        backgroundColor: isScrolled ? '#ADD8E6' : 'transparent',
                        zIndex: 1,
                        boxShadow: 'none',
                        transition: 'background-color 0.3s, box-shadow 0.3s',
                        padding: '10px 0',
                        pl: 10,
                        boxSizing: 'border-box',
                    }}
                >
                    <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1300px', margin: 'auto', padding: "auto" }}>
                        <mui.Grid item xs={1} md={1.5} lg={1.5} xl={1} >
                            <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px", cursor: "pointer" }} onClick={(e: any) => { handleNameClick(e) }}>sreedhar</mui.Typography>
                        </mui.Grid>
                        <mui.Grid item xs={1.5} md={2} lg={2} xl={1.5} sx={{ color: "#565594" }}>
                            <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px", cursor: "pointer" }} onClick={(e: any) => { handleAboutMeClick(e) }}>ABOUT ME</mui.Typography>
                        </mui.Grid>
                        <mui.Grid item xs={1.5} md={2} lg={2} xl={1.5} sx={{ color: "#565594" }} >
                            <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px", cursor: "pointer" }} onClick={(e: any) => { handleExperienceClick(e) }}>EXPERIENCE</mui.Typography>
                        </mui.Grid>
                        <mui.Grid item xs={1.5} md={2} lg={2} xl={1.5} sx={{ color: "#565594" }} >
                            <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px", cursor: "pointer" }} onClick={(e: any) => { handleProjectClick(e) }}>PROJECT</mui.Typography>
                        </mui.Grid>
                        <mui.Grid item xs={1.5} md={2} lg={2} xl={1.5} sx={{ color: "#565594" }} >
                            <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px", cursor: "pointer" }} onClick={(e: any) => { handleContactClick(e) }}>CONTACTS</mui.Typography>
                        </mui.Grid>
                    </mui.Grid>
                </mui.Box>
                <mui.Grid container spacing={2} sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    mt: 6,
                }}>
                    <mui.Grid item xs={5.5} md={5.5} lg={5.5}>
                        <mui.Typography variant="h4" component="h1" gutterBottom fontWeight={"bold"}>
                            Hi, I am Sreedhar, a Front End Developer
                        </mui.Typography>
                        <mui.Button
                            sx={{
                                backgroundColor: "#565594",
                                color: "#FFFFFF",
                                width: "150px",
                                height: "5vh",
                                borderRadius: "0px",
                                '&:hover': {
                                    bgcolor: '#565594',
                                },
                                '&.Mui-disabled': {
                                    bgcolor: '#565594',
                                    color: '#FFFFFF',
                                },
                            }}
                        >
                            <a href="mailto:sreedhar0092@gmail.com" style={{ color: "#FFFFFF", textDecoration: "none" }} >Email me</a>
                        </mui.Button>
                        <mui.Typography mt={6} color={"#565594"}>
                            <a href=" https://www.linkedin.com/in/sreedhar-a-576041242" style={{ color: "#565594", textDecoration: "none" }} > linkedin</a>
                        </mui.Typography>

                    </mui.Grid>
                    <mui.Grid item xs={6} md={6} display={"flex"} justifyContent={"flex-end"} mt={-6} >
                        <mui.Card sx={{ borderRadius: "10px" }}>
                            <mui.CardMedia
                                component="img"
                                image={myImages.src}
                                alt="Profile Image"
                                height={300}
                            />
                        </mui.Card>
                    </mui.Grid>
                </mui.Grid>
                <mui.Grid ref={backgroundRef}> </mui.Grid>
                <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1200px', mt: 10 }} >
                    <mui.Grid item xs={12} md={8} >
                        <mui.Stack spacing={3} flexDirection={"column"}  >
                            <mui.Typography color={"#191D26"} fontWeight={"bold"}>— MY BACKGROUND</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"}>Over the 1+ years, I've developed my skills to become a flexible developer with expertise in front-end development.</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"}>On the front-end side, I've had the opportunity to work extensively with React.js, a powerful JavaScript library for building user interfaces.</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"}>As a front-end developer, I've focused on creating dynamic and responsive user interfaces using React.js. I've worked extensively with modern JavaScript frameworks, CSS-in-JS solutions, and tools like TypeScript and Material-UI to build seamless and intuitive user experiences. I have a keen eye for design and user experience, ensuring that applications are not only functional but also visually appealing. My experience includes integrating APIs, managing state effectively, and optimizing front-end performance for fast and smooth user interactions.</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"}>Throughout my career, I've collaborated with cross-functional teams, participated in agile development methodologies, and have a commitment to continuous learning. I'm always eager to stay up-to-date with the latest technologies and best practices in the rapidly evolving field of web development.</mui.Typography>
                        </mui.Stack>
                    </mui.Grid>
                    <mui.Grid item xs={12} md={4}>
                        <mui.Stack spacing={1}>
                            <mui.Typography color={"#191D26"} fontWeight={"bold"} pl={8} >— SKILLS</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"} pl={12}>HTML</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"} pl={12}>CSS</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"} pl={12}>React JS</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"} pl={12}>NEXT JS</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"} pl={12}>JavaScript</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"} pl={12}>Node JS</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"} pl={12}>My Sql</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"} pl={12}>Postman</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"} pl={12}>Git</mui.Typography>
                            <mui.Typography fontSize={"18px"} color={"#191D26"} pl={12}>Material UI</mui.Typography>
                        </mui.Stack>
                    </mui.Grid>
                </mui.Grid>
                <mui.Grid ref={experienceRef}></mui.Grid>
                <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1200px', mt: 8 }}>
                    <mui.Grid item xs={12} md={5}>
                        <mui.Typography color={"#191D26"} fontWeight={"bold"}>― WORK EXPERIENCE</mui.Typography>
                    </mui.Grid>
                    <mui.Grid item xs={12} md={7} >
                        <mui.Stack spacing={1}>
                            <mui.Typography color={"#191D26"} fontSize={"25px"} >Software Engineer</mui.Typography>
                            <mui.Typography color={"#191D26"} fontSize={"18px"} >Gove Enterprises / Feb-2023 - present</mui.Typography>
                        </mui.Stack>
                    </mui.Grid>
                </mui.Grid>
                <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1200px', mt: 8 }}>
                    <mui.Grid item xs={12} md={5}>
                        <mui.Typography color={"#191D26"} fontWeight={"bold"}>― EDUCATION</mui.Typography>
                    </mui.Grid>
                    <mui.Grid item xs={12} md={7} >
                        <mui.Stack spacing={1}>
                            <mui.Typography color={"#191D26"} fontSize={"25px"} >Francis Xavier Engineering College, India</mui.Typography>
                            <mui.Typography color={"#191D26"} fontSize={"18px"} >Bachelor of Engineering in Information technology / 2019 - 2023</mui.Typography>
                        </mui.Stack>
                    </mui.Grid>
                </mui.Grid>
                <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1200px', mt: 8 }}>
                    <mui.Grid item xs={12} md={5}>
                        <mui.Typography color={"#191D26"} fontWeight={"bold"}>― CERTIFICATIONS</mui.Typography>
                    </mui.Grid>
                    <mui.Grid item xs={12} md={7} >
                        <mui.Stack spacing={1}>
                            <mui.Typography color={"#191D26"} fontSize={"25px"} ></mui.Typography>
                            <mui.Typography color={"#191D26"} fontSize={"18px"} ></mui.Typography>
                        </mui.Stack>
                    </mui.Grid>
                </mui.Grid>
                <mui.Grid ref={projectRef}></mui.Grid>
                <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1200px', mt: 8 }}>
                    <mui.Grid item xs={12} md={5}>
                        <mui.Typography color={"#191D26"} fontWeight={"bold"} variant="h2">Projects</mui.Typography>
                    </mui.Grid>
                    <mui.Grid item xs={12} md={7} >
                        <mui.Stack spacing={2} mt={2}>
                            <mui.Typography color={"#7B88A8"} fontSize={"18px"}  >― REACT / MONGO DB</mui.Typography>
                            <mui.Typography color={"#191D26"} fontSize={"18px"} >This Billpay application was built using SQL for the database, Node.js for the backend, and React for the frontend. The project emphasizes a clear distinction between client-side and server-side code, ensuring a separation of concerns. By implementing this loosely coupled architecture, the two parts—implemented using different technologies—can evolve in parallel and independently from one another.</mui.Typography>
                        </mui.Stack>
                    </mui.Grid>
                </mui.Grid>
                {/* <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1200px', mt: 8 ,bgcolor:"#5D5CA1"}}>
                <mui.Grid item xs={12} md={5}>
                    <mui.Typography color={"#191D26"} fontWeight={"bold"} variant="h2">Projects</mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={12} md={7}  >
                    <mui.Stack spacing={2} mt={2}>
                        <mui.Typography color={"#7B88A8"} fontSize={"18px"}  >― REACT/ SPRING BOOT/ MONGO DB</mui.Typography>
                        <mui.Typography color={"#191D26"} fontSize={"18px"} >This Billpay application was built using SQL for the database, Node.js for the backend, and React for the frontend. The project emphasizes a clear distinction between client-side and server-side code, ensuring a separation of concerns. By implementing this loosely coupled architecture, the two parts—implemented using different technologies—can evolve in parallel and independently from one another.</mui.Typography>
                    </mui.Stack>
                </mui.Grid>
            </mui.Grid> */}
            </mui.Box>
            &nbsp;
            <mui.Grid ref={contactRef}></mui.Grid>
            <mui.Box
                sx={{
                    minHeight: '30vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    background: '#5D5CA1',
                    color: '#000000',
                    p: 2,
                    mt: 5
                }}
            >
                <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1200px', mt: 4, bgcolor: "#5D5CA1" }}>
                    <mui.Grid item xs={12} md={4} xl={7}>
                        <mui.Typography color={"#FFFFFF"} fontWeight={"bold"} variant="h3">Sreedhar</mui.Typography>
                    </mui.Grid>
                    <mui.Grid item xs={12} md={4} lg={4} xl={2.5}>
                        <mui.Stack flexDirection={"column"} spacing={1} mt={2}>
                            <mui.Typography color={"#FFFFFF"} fontSize={"18px"}  >― SOCIALS</mui.Typography>
                            <mui.Typography color={"#FFFFFF"} fontSize={"18px"} ><a href="mailto:sreedhar0092@gmail.com" style={{ color: "#FFFFFF" }} >Linkedin</a></mui.Typography>
                        </mui.Stack>
                    </mui.Grid>
                    <mui.Grid item xs={12} md={4} lg={4} xl={2.5} >
                        <mui.Stack flexDirection={"column"} spacing={1} mt={1.2}>
                            <mui.Typography color={"#FFFFFF"} fontSize={"18px"}  >― CONTACTS</mui.Typography>
                            <mui.Typography color={"#FFFFFF"} fontSize={"18px"} ><a href="mailto:sreedhar0092@gmail.com" style={{ color: "#FFFFFF" }} >sreedhar0092@gmail.com</a></mui.Typography>
                            <mui.Typography color={"#FFFFFF"} fontSize={"18px"} ><a style={{ color: "#FFFFFF" }} >7397087288</a></mui.Typography>
                        </mui.Stack>
                    </mui.Grid>
                </mui.Grid>
            </mui.Box>
        </>
    );
}

export default MyProfile;
