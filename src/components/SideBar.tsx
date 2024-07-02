import * as mui from "@mui/material";
import myimages from "../Assets/sreedhar.png"
function SideBar() {

    return (
        <>
            <mui.Grid container spacing={0}>
                <mui.Grid item xs={2}>
                    <mui.Card sx={{ height: "93vh", width: "350px", backgroundColor: "#000000", color: "#FFFFFF", border: '2px dashed #0087F7' }}>
                        <mui.Grid container spacing={0} sx={{ flexDirection: "column", mt: 2, pl: 3 }}>
                            <mui.Grid item xs={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
                                <img src={myimages.src} width={200}>
                                </img>
                            </mui.Grid>
                            &nbsp;
                            <mui.Grid item xs={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <mui.Typography sx={{ textAlign: "center" }}>SREEDHAR A</mui.Typography>
                            </mui.Grid>
                            &nbsp;
                            <mui.Grid item xs={10} sx={{ display: "flex", justifyContent: "start", alignItems: "start", }}>
                                <mui.Typography sx={{ textAlign: "center", fontWeight: "bold" }} >Techincal Skills :</mui.Typography>
                            </mui.Grid>
                            &nbsp;
                            <mui.Grid item xs={10} sx={{ display: "flex", alignItems: "center", pl: 5 }}>
                                <mui.Typography sx={{ textAlign: "center" }} >1 . HTML && CSS</mui.Typography>
                            </mui.Grid>
                            &nbsp;
                            <mui.Grid item xs={10} sx={{ display: "flex", alignItems: "center", pl: 5 }}>
                                <mui.Typography sx={{ textAlign: "center" }} >2 . JAVASCRIPT</mui.Typography>
                            </mui.Grid>
                            &nbsp;
                            <mui.Grid item xs={10} sx={{ display: "flex", alignItems: "center", pl: 4.7 }}>
                                <mui.Typography sx={{ textAlign: "center" }} >3 . REACTJS</mui.Typography>
                            </mui.Grid>
                            &nbsp;
                            <mui.Grid item xs={10} sx={{ display: "flex", alignItems: "center", pl: 4.7 }}>
                                <mui.Typography sx={{ textAlign: "center" }} >4 . NEXTJS</mui.Typography>
                            </mui.Grid>
                            &nbsp;
                            <mui.Grid item xs={10} sx={{ display: "flex", alignItems: "center" }}>
                                <mui.Typography sx={{ textAlign: "center", fontWeight: "bold" }} >Certificate : </mui.Typography>
                            </mui.Grid>
                        </mui.Grid>
                    </mui.Card>
                </mui.Grid>
            </mui.Grid>
        </>
    )
}
export default (SideBar)