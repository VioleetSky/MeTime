import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                px: { xs: 2, sm: 3, md: 4 },
                pt: { xs: 2, sm: 3 },
            }}
        >
            <Button
                onClick={() => navigate(-1)}
                sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    fontWeight: 600,
                    textTransform: "none",
                    minWidth: "auto",
                    px: 0,
                }}
            >
                ← Back
            </Button>
        </Box>
    );
};

export default ButtonBack;