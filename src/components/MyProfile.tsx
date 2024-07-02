
import * as mui from "@mui/material";

function MyProfile() {

    return (
        <>
            <mui.Grid container spacing={0}>
                <mui.Grid item xs={12}>
                    <mui.Card sx={{ height: "6.5vh",width:"1570px", backgroundColor: "#000000", color: "#FFFFFF", border: '2px dashed #0087F7' }}>
                        Main Page
                    </mui.Card>
                </mui.Grid>

            </mui.Grid>
        </>
    )
}
export default (MyProfile)