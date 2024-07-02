import * as mui from "@mui/material";
import Sreedharimages from "../Assets/sreedhar.png"
function MyProfile() {

    // Email Me Function //

    return (
        <mui.Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'center',
                background: 'linear-gradient(to bottom, #ADD8E6 10%, #FFFFFF 50%)',
                color: '#000000',
                p: 2,
            }}
        >
            {/* <mui.Grid container spacing={0} sx={{ mt: 3 }} display={"flex"} justifyContent={"center"} >
                <mui.Grid xs={0.7}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>sreedhar</mui.Typography>
                </mui.Grid>
                <mui.Grid xs={1} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>ABOUT ME</mui.Typography>
                </mui.Grid>
                <mui.Grid xs={1} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>EXPERIENCE</mui.Typography>
                </mui.Grid>
                <mui.Grid xs={0.8} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>PROJECT</mui.Typography>
                </mui.Grid>
                <mui.Grid xs={1} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>CONTACTS</mui.Typography>
                </mui.Grid>
            </mui.Grid> */}
            <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1200px', mt: 2 }}>
                <mui.Grid item xs={1}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>sreedhar</mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={1.5} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>ABOUT ME</mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={1.5} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>EXPERIENCE</mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={1.5} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>PROJECT</mui.Typography>
                </mui.Grid>
                <mui.Grid item xs={1.5} sx={{ color: "#565594" }}>
                    <mui.Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>CONTACTS</mui.Typography>
                </mui.Grid>
            </mui.Grid>
            <mui.Grid container spacing={2} sx={{ width: '100%', maxWidth: '1200px', mt: 9 }}>
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
                    <mui.Typography mt={10} color={"#565594"}>
                        linkedin
                    </mui.Typography>

                </mui.Grid>
                <mui.Grid item xs={6} md={6} display={"flex"} justifyContent={"flex-end"} mt={-3}>
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
        </mui.Box>
    );
}

export default MyProfile;
