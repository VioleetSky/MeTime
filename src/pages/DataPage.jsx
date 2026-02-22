import ButtonBack from "../components/ButtonBack.jsx";
import {
    Container,
    Box,
    TextField,
    Typography,
    Button,
    FormControl,
    FormHelperText,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DataPage = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
    });

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        phoneNumber: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            firstName: !data.firstName.trim(),
            lastName: !data.lastName.trim(),
            phoneNumber: !data.phoneNumber.trim(),
        };

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (!hasError) {
            navigate("/booking");
        }
    };

    const handleChange = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <ButtonBack />

            <Container
                maxWidth="sm"
                sx={{
                    py: { xs: 3, sm: 5, md: 8 },
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "500px",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            mb: { xs: 3, sm: 4 },
                            textAlign: "center",
                            fontSize: { xs: "24px", sm: "28px", md: "32px" },
                            fontWeight: 600,
                        }}
                    >
                        Enter your data
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        autoComplete="off"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 2, sm: 3 },
                        }}
                    >
                        <TextField
                            required
                            name="firstName"
                            label="First Name"
                            placeholder="Please enter your First Name"
                            fullWidth
                            onChange={handleChange}
                            value={data.firstName}
                            error={errors.firstName}
                            helperText={errors.firstName && "First name is required"}
                        />

                        <TextField
                            required
                            name="lastName"
                            label="Last Name"
                            placeholder="Please enter your Last Name"
                            fullWidth
                            onChange={handleChange}
                            value={data.lastName}
                            error={errors.lastName}
                            helperText={errors.lastName && "Last name is required"}
                        />

                        <FormControl error={errors.phoneNumber} fullWidth>
                            <MuiTelInput
                                required
                                defaultCountry="UA"
                                value={data.phoneNumber}
                                onChange={(value) =>
                                    setData((prev) => ({
                                        ...prev,
                                        phoneNumber: value,
                                    }))
                                }
                                fullWidth
                            />
                            {errors.phoneNumber && (
                                <FormHelperText>
                                    Phone number is required
                                </FormHelperText>
                            )}
                        </FormControl>

                        <Button
                            type="submit"
                            sx={{
                                mt: { xs: 1, sm: 2 },
                                width: { xs: "100%", sm: "250px" },
                                alignSelf: { xs: "stretch", sm: "center" },
                                py: 1.5,
                                fontSize: "16px",
                                fontWeight: 600,
                                borderRadius: "12px",
                                bgcolor: "primary.main",
                                color: "background.default",
                            }}
                        >
                            Reserve
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default DataPage;