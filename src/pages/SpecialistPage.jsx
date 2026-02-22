import { useParams, useNavigate } from "react-router-dom";
import specialists from "../data/specialists.js";
import {
    Container,
    Typography,
    Box,
    Stack,
    Paper,
    Button,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTime } from "../store/slice/slice.jsx";
import ButtonBack from "../components/ButtonBack.jsx";

const DateStrip = ({ selectedDate, setSelectedDate }) => {
    const days = [];
    const isTooLate = dayjs().hour() >= 19;
    const startDay = isTooLate ? 1 : 0;
    const numbersDays = 14;

    for (let i = startDay; i < numbersDays + startDay; i++) {
        days.push(dayjs().add(i, "days"));
    }

    return (
        <Box sx={{ width: "100%", overflowX: "auto", py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                {selectedDate.format("MMMM")}
            </Typography>

            <Stack direction="row" spacing={2}>
                {days.map((day) => {
                    const isSelected = day.isSame(selectedDate, "day");
                    const isPast = day.isBefore(dayjs(), "day");

                    return (
                        <Paper
                            key={day.toString()}
                            elevation={0}
                            onClick={() => setSelectedDate(day)}
                            sx={{
                                minWidth: { xs: 60, sm: 70 },
                                height: { xs: 80, sm: 90 },
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                borderRadius: "16px",
                                border: "1px solid",
                                borderColor: isSelected
                                    ? "primary.main"
                                    : "background.default",
                                backgroundColor: isSelected
                                    ? "background.default"
                                    : "transparent",
                                opacity: isPast && !isSelected ? 0.4 : 1,
                                transition: "0.3s",
                                "&:hover": { borderColor: "primary.main" },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: "18px", sm: "20px" },
                                    fontWeight: "bold",
                                    color: isSelected ? "primary.main" : "inherit",
                                }}
                            >
                                {day.format("DD")}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "12px", sm: "14px" },
                                    color: isSelected ? "primary.main" : "text.secondary",
                                }}
                            >
                                {day.format("ddd")}
                            </Typography>
                        </Paper>
                    );
                })}
            </Stack>
        </Box>
    );
};

const ServicePage = () => {
    const { specialist, service, category } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentSpecialist = specialists.find(
        (item) => item.id === +specialist
    );

    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedTime, setSelectedTime] = useState("");

    const generateTimeSlots = (date) => {
        const slots = [
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
        ];

        const isToday = dayjs(date).isSame(dayjs(), "day");

        if (isToday) {
            const currentHour = dayjs().hour();
            return slots.filter((slot) => parseInt(slot) > currentHour + 1);
        }

        return slots;
    };

    const currentSelectedDate = () => {
        const data = {
            date: selectedDate.toISOString(),
            time: selectedTime,
            specialist: currentSpecialist,
            service: service,
            category: category,
        };
        dispatch(updateTime(data));
        navigate("/yourData");
    };

    if (!currentSpecialist)
        return <Typography>Specialist not found</Typography>;

    return (
        <>
            <ButtonBack />

            <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "flex-start" },
                        gap: { xs: 3, md: 6 },
                    }}
                >
                    <Box
                        component="img"
                        src={currentSpecialist.photo}
                        sx={{
                            width: { xs: "220px", sm: "260px", md: "320px" },
                            height: { xs: "220px", sm: "260px", md: "320px" },
                            borderRadius: "20px",
                            objectFit: "cover",
                            boxShadow: 3,
                        }}
                    />

                    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: "28px", sm: "32px", md: "40px" },
                                fontWeight: 600,
                            }}
                        >
                            {currentSpecialist.firstName} {currentSpecialist.lastName}
                        </Typography>

                        {currentSpecialist.specializations.map((item, index) => (
                            <Typography
                                key={index}
                                sx={{
                                    color: "text.secondary",
                                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                                    mt: 1,
                                }}
                            >
                                {item}
                            </Typography>
                        ))}

                        <Typography
                            sx={{
                                mt: 2,
                                fontSize: { xs: "16px", sm: "18px" },
                                fontWeight: 500,
                            }}
                        >
                            Experience: {currentSpecialist.experienceYears} years
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: { xs: 5, md: 8 } }}>
                    <DateStrip
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />

                    <Typography
                        variant="h5"
                        sx={{
                            mt: 4,
                            mb: 3,
                            fontSize: { xs: "20px", sm: "22px" },
                        }}
                    >
                        Available Time
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "repeat(2, 1fr)",
                                sm: "repeat(3, 1fr)",
                                md: "repeat(4, 1fr)",
                            },
                            gap: { xs: 1.5, sm: 2, md: 3 },
                        }}
                    >
                        {generateTimeSlots(selectedDate).length > 0 ? (
                            generateTimeSlots(selectedDate).map((time) => (
                                <Box
                                    key={time}
                                    onClick={() => setSelectedTime(time)}
                                    sx={{
                                        textAlign: "center",
                                        py: { xs: 1.5, sm: 2 },
                                        borderRadius: "12px",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        transition: "0.2s",
                                        border: "2px solid #FDCCC5",
                                        backgroundColor:
                                            selectedTime === time
                                                ? "primary.main"
                                                : "background.default",
                                        color:
                                            selectedTime === time
                                                ? "background.default"
                                                : "#FDCCC5",
                                        "&:hover": {
                                            backgroundColor: "#FDCCC5",
                                            color: "white",
                                        },
                                    }}
                                >
                                    {time}
                                </Box>
                            ))
                        ) : (
                            <Typography>
                                There are no free times on the selected day.
                            </Typography>
                        )}
                    </Box>

                    {selectedTime && (
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                            <Button
                                onClick={currentSelectedDate}
                                sx={{
                                    width: { xs: "100%", sm: "300px" },
                                    maxWidth: "400px",
                                    py: 1.5,
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    borderRadius: "12px",
                                    backgroundColor: "primary.main",
                                    color: "background.default",
                                }}
                            >
                                Book
                            </Button>
                        </Box>
                    )}
                </Box>
            </Container>
        </>
    );
};

export default ServicePage;