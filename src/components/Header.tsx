
import * as mui from "@mui/material";
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Fade from '@mui/material/Fade';
interface SidebarProps {
    onSelect: (section: string) => void;
}


function Header({ onSelect }: any) {
    const isSmallScreen = mui.useMediaQuery('(max-width:228px)')
    const [selectedSection, setSelectedSection] = useState<any>("home");
    const handleOnclick = (data: any) => {
        setSelectedSection(data)
        onSelect(data)
        window.history.replaceState(null, '', data);
        handleClose()
    }
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <mui.Grid container spacing={0} >
                <mui.Grid item xs={12}>

                    <mui.Box
                        sx={{
                            width: '100%',
                            // height: "8vh",
                            position: 'sticky',
                            top: 0,
                            backgroundColor: '#202020',
                            color: "#9B9B9B",
                            zIndex: 1,
                            boxShadow: 'none',
                            transition: 'background-color 0.3s, box-shadow 0.3s',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                            // padding: '10px 0',
                            // pl: 2,
                            // boxSizing: 'border-box',

                        }}
                    >
                        <mui.Grid container spacing={0} display={"flex"} alignItems={"center"} >
                            <mui.Grid item xs={7} sm={7} md={7} lg={7} xl={7} >
                                <mui.Typography sx={{ fontSize: "21px", cursor: "pointer", p: 1 }} onClick={(e: any) => { onSelect(e) }}>Sreedhar</mui.Typography>
                            </mui.Grid>
                            {!isSmallScreen
                                ?
                                <mui.Grid item xs={5} sm={5} md={5} lg={5} xl={5}  >
                                    <mui.Stack direction={"row"} justifyContent={"flex-end"} gap={"20px"} pr={4}>
                                        <mui.Typography sx={{ fontSize: "12px", cursor: "pointer" }} color={selectedSection === "home" ? "#FFFFFF" : "#9B9B9B"} onClick={(e: any) => { handleOnclick("home") }}>HOME</mui.Typography>
                                        <mui.Typography sx={{ fontSize: "12px", cursor: "pointer" }} color={selectedSection === "about" ? "#FFFFFF" : "#9B9B9B"} onClick={(e: any) => { handleOnclick("about") }}>ABOUT</mui.Typography>
                                        {/* <mui.Typography sx={{ fontSize: "12px", cursor: "pointer" }} onClick={(e: any) => { handleOnclick(exprience) }}>EXPERIENCE</mui.Typography> */}
                                        {/* <mui.Typography sx={{ fontSize: "12px", cursor: "pointer" }} color={selectedSection === "project" ? "#FFFFFF" : "#9B9B9B"} onClick={(e: any) => { handleOnclick("project") }}>PROJECT</mui.Typography> */}
                                        {/* <mui.Typography sx={{ fontSize: "12px", cursor: "pointer" }} color={selectedSection === "contact" ? "#FFFFFF" : "#9B9B9B"} onClick={(e: any) => { handleOnclick("contact") }}>CONTACTS</mui.Typography> */}
                                    </mui.Stack>
                                </mui.Grid>
                                :
                                <mui.Grid item xs={5} sm={5} md={5} lg={5} xl={5} display={"flex"} justifyContent={"flex-end"} >

                                    <mui.Button
                                        id="basic-button"
                                        aria-controls={open ? 'fade-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <MenuIcon sx={{ fontSize: "20px", color: "white" }} />
                                    </mui.Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        TransitionComponent={Fade}
                                        MenuListProps={{
                                            'aria-labelledby': 'fade-button',
                                        }}
                                    >
                                        <MenuItem sx={{ fontSize: "15px", color: "#6C757D" }} onClick={() => { handleOnclick("home") }}>HOME</MenuItem>
                                        <MenuItem sx={{ fontSize: "15px", color: "#6C757D" }} onClick={(e: any) => { handleOnclick("about") }}>ABOUT</MenuItem>
                                        {/* <MenuItem sx={{ fontSize: "15px", color: "#6C757D" }} onClick={(e: any) => { handleOnclick("contact") }}>CONTACT</MenuItem> */}
                                    </Menu>
                                </mui.Grid>
                            }
                        </mui.Grid>
                    </mui.Box>
                </mui.Grid>
            </mui.Grid >
        </>
    )
}
export default (Header)