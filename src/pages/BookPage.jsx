import { useSelector } from "react-redux";
import { Container, Box, Typography, Button } from "@mui/material";
import heartImage from "../images/heart.png";
import services from "../data/services.js";
import { useNavigate } from "react-router-dom";
import ButtonBack from "../components/ButtonBack.jsx";

const BookPage = () => {
    const navigate = useNavigate();
    const { date, time, specialist, service, category } = useSelector(
        (state) => state.selectedTime
    );

    if (!date || !time || !specialist) {
        return <Typography>No booking data</Typography>;
    }

    const categoryData = services[category];
    const currentService = categoryData?.services.find(
        (item) => item.id === service
    );

    return (
        <>
            <ButtonBack />

            <Container
                maxWidth="md"
                sx={{
                    py: { xs: 4, sm: 6, md: 8 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    src={heartImage}
                    alt="Heart"
                    sx={{
                        width: { xs: 80, sm: 100, md: 120 },
                        mb: { xs: 3, sm: 4 },
                    }}
                />

                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        fontSize: { xs: "22px", sm: "26px", md: "32px" },
                        mb: { xs: 4, sm: 5 },
                    }}
                >
                    Thank you for booking with{" "}
                    <Box component="span" sx={{ fontWeight: 700 }}>
                        MeTime
                    </Box>
                </Typography>

                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "600px",
                        px: { xs: 2, sm: 3 },
                        py: { xs: 3, sm: 4 },
                        borderRadius: "20px",
                        boxShadow: 3,
                        display: "flex",
                        flexDirection: "column",
                        gap: { xs: 3, sm: 4 },
                        textAlign: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "20px", sm: "24px", md: "28px" },
                            fontWeight: 600,
                        }}
                    >
                        Your booking details
                    </Typography>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", sm: "16px" },
                                color: "text.secondary",
                            }}
                        >
                            Date
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "18px", sm: "22px", md: "24px" },
                                fontWeight: 500,
                            }}
                        >
                            {new Date(date).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}{" "}
                            {time}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", sm: "16px" },
                                color: "text.secondary",
                            }}
                        >
                            Procedure
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "18px", sm: "22px", md: "24px" },
                                fontWeight: 500,
                            }}
                        >
                            {currentService.title}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", sm: "16px" },
                                color: "text.secondary",
                            }}
                        >
                            Specialist
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "18px", sm: "22px", md: "24px" },
                                fontWeight: 500,
                            }}
                        >
                            {specialist.firstName} {specialist.lastName}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", sm: "16px" },
                                color: "text.secondary",
                            }}
                        >
                            Duration
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "18px", sm: "22px", md: "24px" },
                                fontWeight: 500,
                            }}
                        >
                            {currentService.duration} min
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", sm: "16px" },
                                color: "text.secondary",
                            }}
                        >
                            Price
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "18px", sm: "22px", md: "24px" },
                                fontWeight: 500,
                            }}
                        >
                            {currentService.price} uah
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", sm: "16px" },
                                color: "text.secondary",
                            }}
                        >
                            Location
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "16px", sm: "18px" },
                                fontWeight: 500,
                            }}
                        >
                            At The Gallery Salon
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", sm: "16px" },
                            }}
                        >
                            8502 Preston Rd. Inglewood
                        </Typography>
                    </Box>
                </Box>

                <Button
                    onClick={() => navigate("/")}
                    sx={{
                        mt: { xs: 4, sm: 6 },
                        width: { xs: "100%", sm: "250px" },
                        py: 1.5,
                        fontSize: { xs: "16px", sm: "18px" },
                        fontWeight: 600,
                        borderRadius: "12px",
                    }}
                >
                    Main Page
                </Button>
            </Container>
        </>
    );
};

export default BookPage;