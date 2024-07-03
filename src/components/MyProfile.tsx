import * as mui from "@mui/material";
import Sreedharimages from "../Assets/sreedhar.png"
import { useEffect, useState } from "react";
function MyProfile() {

    // Email Me Function //
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <mui.Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'center',
                background: 'linear-gradient(to bottom, #ADD8E6 30%, #FFFFFF 70%)',
                color: '#000000',
                p: 2,
            }}
        >

            <mui.Grid container spacing={2} sx={{
                width: '100%',
                maxWidth: '1200px',
                mt: 2.5,
                position: 'sticky',
                top: 0,
                backgroundColor: isScrolled ? '#ADD8E6' : 'transparent',
                zIndex: 1,
                boxShadow: 'none',
                transition: 'background-color 0.3s, box-shadow 0.3s',
                padding: '10px 0',
            }}>
                <mui.Grid item xs={1}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>sreedhar</mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={1.5} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px", cursor: "pointer" }}>ABOUT ME</mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={1.5} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px", cursor: "pointer" }}>EXPERIENCE</mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={1.5} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px", cursor: "pointer" }}>PROJECT</mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={1.5} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px", cursor: "pointer" }}>CONTACTS</mui.Typography>
                </mui.Grid>
            </mui.Grid>
            <mui.Grid container spacing={2} sx={{
                width: '100%',
                maxWidth: '1200px',
                mt: 9,
            }}>
                <mui.Grid item xs={5.5}>
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
                        linkedin
                    </mui.Typography>

                </mui.Grid>
                <mui.Grid item xs={6} md={6} display={"flex"} justifyContent={"flex-end"} mt={-6}>
                    <mui.Card sx={{ borderRadius: "10px" }}>
                        <mui.CardMedia
                            component="img"
                            image={Sreedharimages.src}
                            alt="Profile Image"
                            height={300}
                        />
                    </mui.Card>
                </mui.Grid>
            </mui.Grid>
            <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1200px', mt: 10 }}>
                <mui.Grid item xs={12} md={8}>
                    <mui.Stack spacing={3} flexDirection={"column"}>
                        <mui.Typography color={"#090939"} fontWeight={"bold"}>— MY BACKGROUND</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"}>Over the 1+ years, I've developed my skills to become a flexible developer with expertise in front-end development.</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"}>On the front-end side, I've had the opportunity to work extensively with React.js, a powerful JavaScript library for building user interfaces.</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"}>As a full stack developer, I've involved into the back-end world, too. I've worked with various technologies such as Node.js, Spring boot, Python, and databases like MongoDB and PostgreSQL to develop robust server-side applications. I'm experienced in designing APIs, implementing authentication and authorization mechanisms, and optimizing server performance for optimal user experiences.</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"}>Throughout my career, I've collaborated with cross-functional teams, participated in agile development methodologies, and have a commitment to continuous learning. I'm always eager to stay up-to-date with the latest technologies and best practices in the rapidly evolving field of web development.</mui.Typography>
                    </mui.Stack>
                </mui.Grid>
                <mui.Grid item xs={12} md={4}>
                    <mui.Stack spacing={1}>
                        <mui.Typography color={"#090939"} fontWeight={"bold"} pl={8} >— SKILLS</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"} pl={8}>HTML</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"} pl={8}>CSS</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"} pl={8}>React JS</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"} pl={8}>NEXT JS</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"} pl={8}>JavaScript</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"} pl={8}>Node JS</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"} pl={8}>My Sql</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"} pl={8}>Postman</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"} pl={8}>Git</mui.Typography>
                        <mui.Typography fontSize={"20px"} color={"#191D26"} pl={8}>Material UI</mui.Typography>
                    </mui.Stack>
                </mui.Grid>
            </mui.Grid>

        </mui.Box>
    );
}

export default MyProfile;
