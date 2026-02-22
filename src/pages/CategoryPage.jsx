import {useParams} from "react-router-dom";
import services from "../data/services.js";
import {Alert, Container, Typography, Card, CardActionArea, CardContent, Box} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import {useNavigate} from "react-router-dom";
import ButtonBack from "../components/ButtonBack.jsx";

function CategoryPage() {
    const navigate = useNavigate();
    const {category}=useParams();
    const currentCategory= services[category];
    console.log(currentCategory);

    return (
        <>
            <ButtonBack/>
            <Typography
                variant="h4"
                sx={{
                    fontSize: {
                        md:"36px",
                        sm: "30px",
                        xs: "26px"
                    },
                    marginY:"10px",
                    fontWeight: "semibold",
                    textAlign:"center"
                }}
            >Now, choose one that fit your needs:</Typography>
            {!currentCategory ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
                Data loading error
            </Alert> :
            <Container
            sx={{
                display: "flex",
                flexDirection: "column",
            }}>
                {currentCategory.services.map(service => (
                        <Card
                            key={service.id}
                            sx={{
                            cursor: "pointer",
                            backgroundColor: "white",
                            borderRadius: 0,
                            boxShadow: "none",
                            borderBottom: "1px solid lightgray",
                            "&:hover": {
                                bgcolor: "primary.main",
                                opacity: 0.25,
                            }
                        }}
                        onClick={()=>navigate(`/${category}/${service.id}`)}
                        >
                            <CardActionArea
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                            >
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            fontWeight: "semibold",
                                            fontSize: {
                                                md: "36px",
                                                sm: "30px",
                                                xs: "20px"
                                            },
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            fontSize: {
                                                md: "20px",
                                                sm: "18px",
                                                xs: "16px"
                                            },
                                            fontWeight: "medium",
                                        }}>
                                        {service.duration} min
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography
                                    sx={{
                                        fontSize: {
                                            sm: "30px",
                                            xs: "19px",
                                        },
                                        color: "text.main",
                                    }}>
                                        {service.price} uah
                                    </Typography>
                                </CardContent>

                            </CardActionArea>
                        </Card>
                    ))}
            </Container>
            }
        </>
    )
}
export default CategoryPage;