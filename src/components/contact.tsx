import React from "react";
import * as mui from "@mui/material";

function Contact() {

    return (
        <>
            <mui.Grid container spacing={2} px={{ xs: 2, sm: 2, md: 8, lg: 15, xl: 15 }} py={{ xs: 2, sm: 2, md: 8, lg: 8, xl: 8 }}>
                <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <mui.Stack direction={"column"} >
                        <mui.Typography fontWeight={"bold"} variant="body1" gutterBottom>
                            About
                        </mui.Typography>
                        <mui.Typography variant="caption" color={"#5B5D5E"} >
                            As a front-end developer, I&apos;ve focused on creating dynamic and responsive user interfaces using React.js. I&apos;ve worked extensively with modern JavaScript frameworks, CSS-in-JS solutions, and tools like TypeScript and Material-UI to build seamless and intuitive user experiences. I have a keen eye for design and user experience, ensuring that applications are not only functional but also visually appealing. My experience includes integrating APIs, managing state effectively, and optimizing front-end performance for fast and smooth user interactions.
                        </mui.Typography>
                    </mui.Stack>
                </mui.Grid>
                <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <mui.Typography fontWeight={"bold"} variant="body1" >
                        Skills
                    </mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    {/* <mui.Stack direction={"row"} spacing={1} > */}
                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="HTML" />
                    &nbsp;
                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="CSS" />
                    &nbsp;
                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="JAVASCRIPT" />
                    &nbsp;
                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="REACT.JS" />
                    &nbsp;
                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="NEXT.JS" />
                    &nbsp;
                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="NODE JS" />
                    &nbsp;
                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="POSTMAN" />
                    &nbsp;
                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="GIT" />
                    &nbsp;
                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="MATERIAL UI" />
                    {/* </mui.Stack> */}
                </mui.Grid>
                <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <mui.Stack direction={"column"} spacing={5} >
                        <mui.Typography fontWeight={"bold"} variant="body1" gutterBottom>
                            Work Experience
                        </mui.Typography>
                        <mui.Box sx={{ width: "100%", borderRadius: "10px" }} px={2} >
                            <mui.Grid container xl={11.8} spacing={2} bgcolor={"#F7F7F7"} px={2} py={1}>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4}  >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Company</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} fontWeight={"bold"}>Gove Enterprises</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Title</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >Software Engineer</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Period</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >August 2024 - Present </mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Projects</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >BillPay - Document Management System</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Skills</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="HTML" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="CSS" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="JAVASCRIPT" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="NEXT.JS" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="MATERIAL UI" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="ANTD" />
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Description</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}> Designed and developed a dynamic UI to streamline data entry and client information management, reducing manual workload and improving efficiency.
                                    </mui.Typography>
                                </mui.Grid>
                            </mui.Grid>

                            <mui.Grid container xl={11.8} spacing={2} bgcolor={"#F7F7F7"} px={2} py={1} mt={0.7}>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Company</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} fontWeight={"bold"}>Gove Enterprises</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Title</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >Software Engineer</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Period</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >August 2024 - Present </mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Projects</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >BAAS - Business As A Service</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Skills</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="HTML" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="CSS" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="JAVASCRIPT" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="NEXT.JS" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="MATERIAL UI" />
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Description</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}> Developed a scalable Business-as-a-Service (BaaS) application designed to streamline office operations through a suite of integrated tools
                                    </mui.Typography>
                                </mui.Grid>
                            </mui.Grid>

                            <mui.Grid container xl={11.8} spacing={2} bgcolor={"#F7F7F7"} px={2} py={1} mt={0.7}>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Company</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} fontWeight={"bold"}>Gove Enterprises</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Title</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >Software Engineer</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Period</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >August 2024 - Present </mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Projects</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >DMS - Document Management System</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Skills</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="HTML" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="CSS" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="JAVASCRIPT" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="NEXT.JS" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="MATERIAL UI" />
                                    &nbsp;
                                    <mui.Chip sx={{ fontSize: "15px", color: "#fff", bgcolor: "#6C757D", fontWeight: "bold", p: 1.5 }} size="small" label="ANTD" />
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Description</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}> Designed and developed a dynamic UI to streamline data entry and client information management, reducing manual workload and improving efficiency.
                                    </mui.Typography>
                                </mui.Grid>
                            </mui.Grid>
                        </mui.Box>
                    </mui.Stack>
                </mui.Grid>
                <mui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <mui.Stack direction={"column"} spacing={5} >
                        <mui.Typography fontWeight={"bold"} variant="body1" gutterBottom>
                            Education
                        </mui.Typography>
                        <mui.Box sx={{ width: "100%", borderRadius: "10px" }} px={2} >
                            <mui.Grid container xl={11.8} spacing={2} bgcolor={"#F7F7F7"} px={2} py={1}>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Institute</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} fontWeight={"bold"}>Francis Xavier Engineering College</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Year</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >2019 - 2023</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"}>Course</mui.Typography>
                                </mui.Grid>
                                <mui.Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                                    <mui.Typography color={"#717374"} variant="caption" fontSize={"20px"} >B.Tech - Information Technology </mui.Typography>
                                </mui.Grid>
                            </mui.Grid>
                        </mui.Box>
                    </mui.Stack>
                </mui.Grid>
            </mui.Grid >
        </>
    )
}
export default Contact;