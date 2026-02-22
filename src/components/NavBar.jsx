import {Container, Typography} from "@mui/material";

const NavBar = () => {
return (
    <Container
    sx={{
        pt: "20px",
        textAlign: "center"
    }}
    >
        <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
                fontSize:{
                    xl: "70px",
                    lg: "60px",
                    md: "55px",
                    sm: "35px",
                    xs: "30px"
                },
            }}
        >
        MeTime
        </Typography>
    </Container>
    )
}
export default NavBar;