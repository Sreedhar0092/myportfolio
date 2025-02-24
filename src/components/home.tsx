import React from "react";
import * as mui from "@mui/material";
import image from "@/Assets/sreedhar-removebg (1)-fotor-bg-remover-20250223222840.png";
import { Linkedin } from "lucide-react";
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Home({ onSelect }: any) {

    return (
        <>
            <mui.Grid container spacing={0}>
                <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <mui.Box sx={{
                        width: "100%",
                        // background: rgb(0,48,61)
                        background: "linear-gradient(90deg, rgba(6,0,103,1) 0%, rgba(7,7,96,1) 55%, rgba(9,9,144,1) 100%)"
                    }}>
                        <mui.Grid container spacing={0.5} py={1}>
                            <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12} display={"flex"} justifyContent={"center"}>
                                <img src={image?.src} width={200} height={200} style={{ borderRadius: "1000px" }} />
                            </mui.Grid>
                            <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12} display={"flex"} justifyContent={"center"}>
                                <mui.Stack direction={"column"} spacing={1} display={"flex"}>
                                    <mui.Typography color={"#FFF"} >Sreedhar</mui.Typography>
                                    <mui.Typography variant="caption" color={"#FFF"} fontWeight={"bold"} fontSize={"12px"} >Software Engineer</mui.Typography>
                                    {/* <mui.Typography align="center">
                                        <a href="https://www.linkedin.com/in/sreedhar-a-576041242" target="_blank">
                                            <Linkedin size={20} color="white" />
                                        </a>
                                    </mui.Typography> */}
                                </mui.Stack>
                            </mui.Grid>
                        </mui.Grid>
                    </mui.Box>
                </mui.Grid>
                <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <mui.Box sx={{
                        width: "100%",
                        // background: rgb(0,48,61)
                        // background: "linear-gradient(90deg, rgba(6,0,103,1) 0%, rgba(7,7,96,1) 55%, rgba(9,9,144,1) 100%)"
                    }}>
                    </mui.Box>
                    <mui.Grid container spacing={0.5} py={3}>
                        <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12} display={"flex"} justifyContent={"center"}>
                            <mui.Stack direction={"row"} spacing={2}>
                                <a href="/pdf/Sreedhar-Resume.pdf" download>
                                    <mui.Button variant="outlined" sx={{
                                        color: "#6C757D", fontSize: "15px",
                                        '&:hover': {
                                            bgcolor: '#6C757D',
                                            color: 'white'
                                        },
                                        '&.Mui-disabled': {
                                            bgcolor: '#6C757D',
                                            color: '#FFFFFF',
                                        },
                                    }}
                                        onClick={() => { }}
                                    >
                                        Resume &nbsp; <DownloadIcon sx={{ fontSize: "25px" }} />
                                    </mui.Button>
                                </a>
                                {/* <mui.Button variant="outlined" sx={{
                                    color: "#6C757D", fontSize: "15px",
                                    '&:hover': {
                                        bgcolor: '#6C757D',
                                        color: 'white'
                                    },
                                    '&.Mui-disabled': {
                                        bgcolor: '#6C757D',
                                        color: '#FFFFFF',
                                    },
                                }} onClick={() => { onSelect("contact")}} >
                                    Contact  &nbsp;<ArrowForwardIcon sx={{ fontSize: "25px" }} />
                                </mui.Button> */}
                            </mui.Stack>
                        </mui.Grid>
                    </mui.Grid>
                </mui.Grid>
                <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <mui.Grid container spacing={2} px={{ xs: 2, sm: 2, md: 8, lg: 15, xl: 15 }} >
                        <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                            <mui.Typography variant="caption" color={"#222426"} >
                                As a front-end developer, I&apos;ve focused on creating dynamic and responsive user interfaces using React.js. I&apos;ve worked extensively with modern JavaScript frameworks, CSS-in-JS solutions, and tools like TypeScript and Material-UI to build seamless and intuitive user experiences. I have a keen eye for design and user experience, ensuring that applications are not only functional but also visually appealing. My experience includes integrating APIs, managing state effectively, and optimizing front-end performance for fast and smooth user interactions.
                            </mui.Typography>
                        </mui.Grid>
                    </mui.Grid>
                </mui.Grid>
            </mui.Grid>
        </>
    )
}
export default Home;