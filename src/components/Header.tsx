
import * as mui from "@mui/material";

function Header() {

    return (
        <>
            <mui.Grid container spacing={0}>
                <mui.Grid item xs={12}>
                    <mui.Card sx={{ height: "6.5vh", backgroundColor: "#000000", color: "#FFFFFF", border: '2px dashed #0087F7' }}>
                        <mui.Grid container spacing={0} sx={{ flexDirection: "row", mt: 2.5 }}>
                            <mui.Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>

                            </mui.Grid>
                            <mui.Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                            </mui.Grid>
                            <mui.Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <mui.Typography sx={{ textAlign: "center" }} >About</mui.Typography>
                            </mui.Grid>
                            <mui.Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <mui.Typography sx={{ textAlign: "center" }} >Projects</mui.Typography>
                            </mui.Grid>
                            <mui.Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <mui.Typography sx={{ textAlign: "center" }} >Contact</mui.Typography>
                            </mui.Grid>
                            <mui.Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <mui.Typography sx={{ textAlign: "center" }} >Header</mui.Typography>
                            </mui.Grid>
                        </mui.Grid>
                    </mui.Card>
                </mui.Grid>
            </mui.Grid>
        </>
    )
}
export default (Header)