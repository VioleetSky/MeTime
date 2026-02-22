import {Container, Typography, Alert, Card, CardContent, CardMedia, CardActionArea, Box, Grid} from "@mui/material";
import services from "../data/services.js";
import CheckIcon from '@mui/icons-material/Check';
import {useNavigate} from "react-router-dom";

const CategoriesPage=()=>{
    const navigate = useNavigate();
    return (
        <Container>
            <Typography
                variant="h4"
                sx={{
                    fontSize: {
                        md:"36px",
                        sm: "30px"
                    },
                    marginY:"15px",
                    fontWeight: "semibold",
                    textAlign:"center"
                }}
            >
                Please, choose a service:
            </Typography>
            <Box>
                {Object.keys(services).length===0 ?
                    ( <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
                        Data loading error
                    </Alert>):
                    (
                        <Grid container spacing={3}  sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        {Object.entries(services).map(([key, value])=>(
                            <Grid item key={key} xs={12} sm={6} md={4}>
                            <Card sx={{
                                width: 345,
                                bgcolor: "transparent",
                                border: "none",
                                boxShadow: "none",
                                cursor: "pointer",
                                borderRadius: "5px"
                            }}
                            onClick={()=>navigate(`/${key}`)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={value.image}
                                        alt={value.title}
                                        sx={{
                                            aspectRatio: 4/3,
                                            objectFit: "cover",
                                            width: {
                                                md: "100%",
                                                sm: "310px"
                                            },
                                            borderRadius: "5px"
                                        }}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            sx={{
                                                fontWeight: "medium",
                                                fontSize: "32px",
                                                textAlign: "center"
                                            }}
                                        >
                                            {value.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </Grid>
                            ))}
                        </Grid>
                    )}
            </Box>
        </Container>

    )
}
export default CategoriesPage;