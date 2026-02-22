import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import NavBar from "../components/NavBar.jsx";

const MainLayout = () => {
    return (
            <Container >
                <NavBar/>
                <Outlet/>
            </Container>
    );
};


export default MainLayout;