import {Container, Box, Typography, Button, Slide, Fade} from "@mui/material";
import meditationWomen from "../images/Young woman meditating in nature surrounded by butterflies.png";
import backgroundMeditationWomen from "../images/Background Shape.png";
import {useNavigate} from "react-router-dom";

const StartPage = () => {
    const navigate = useNavigate();
return (
    <>
       <Slide
       direction="up"
       in={true}
       timeout={800}>
    <Box
        component="img"
        src={backgroundMeditationWomen}
        sx={{
            maxHeight: "450px",
            width: "100%",
            opacity: 0.9,
            position: "absolute",
            zIndex: -1,
            right: "0px",
            top: "100px",
        }}
    />
       </Slide>
    <Container
    sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        m: 0,
        mb: 3
    }}>
        <Fade
            in={true}
            timeout={1000}>
    <Box
        component="img"
      src={meditationWomen}
        sx={{
            objectFit: "contain",
            maxHeight: "350px",
        }}
    />
        </Fade>
        <Slide
        in={true}
        timeout={1200}
        direction="up">
    <Typography
        component="h4"
        sx={{
            fontSize: {
                lg: "50px",
                xl: "50px",
                md: "45px",
                sm: "40px",
                xs: "32px"
            },
            textAlign: "center",
            fontWeight: "bold",
        }}
    >
        Welcome to
        The Gallery Salon!</Typography>
        </Slide>
        <Slide
        in={true}
        timeout={1000}
        direction="up">
        <Typography
        sx={{
            fontSize: {
                lg: "32px",
                xl: "28px",
                md: "25px",
                sm: "22px",
                xs: "18px"
            },
            fontWeight: "medium",
            textAlign: "center",
            textWrap: "break-word",
            color: "text.main",
            py: "20px"
        }}
        >Follow the steps to schedule your next appointment with us.</Typography>
        </Slide>

        <Slide
            in={true}
            timeout={1500}
            direction="up"
            >
        <Button
            onClick={()=>navigate("categories")}
        sx={{
            backgroundColor: "primary.main",
            color: "background.default",
            borderRadius: "10px",
            width:{
                lg: "190px",
                xl: "190px",
                md: "170px",
                sm: "170px",
                xs: "140px"
            },
            fontWeight: "bold",
            height: "60px",
            fontSize: {
                lg: "25px",
                xl: "25px",
                md: "20px",
                sm: "20px",
                xs: "18px"
            },
            boxShadow: 1,
            "&:hover": {
                backgroundColor: "primary.secondary",
            }
        }}
        >Start</Button>
        </Slide>
    </Container>
    </>
)
}
export default StartPage;