import {useParams, useNavigate} from 'react-router-dom';
import services from "../data/services.js";
import specialists from "../data/specialists.js";
import {Container, Typography, Card, CardContent, CardMedia, CardActionArea} from "@mui/material";
import ButtonBack from "../components/ButtonBack.jsx";

const ServicePage=()=>{
    const {category, service} = useParams();
    const navigate = useNavigate();
    const currentCategory = services[category];
    const currentService = currentCategory.services.find(item=> item.id===service);

    const arraySpecialist = currentService?.masters.map(item=> {
        for(const key in specialists ){
            if(item===specialists[key].id){
                return specialists[key];
            }
        }
        return null;
    });

    return(
        <>
            <ButtonBack/>
       <Container>
           <Card sx={{
               backgroundColor:"white",
               border: "none",
               boxShadow: "none",
           }}>
                   <CardContent>
                       <Typography
                           gutterBottom
                           variant="h3"
                           sx={{
                               fontSize: {
                                   md:"40px",
                                   sm: "36px"
                               },
                               marginY:"15px",
                               fontWeight: "bold"
                           }}
                       >
                           {currentService.title}
                       </Typography>

                       <Typography
                           variant="h5"
                           sx={{
                               color: 'text.secondary',
                               fontSize: {
                                   md:"26px",
                                   sm: "24px",
                                   xs: "20px"
                               },
                           }}>
                           {currentService.duration} min
                       </Typography>
                       <Typography
                           variant="h5"
                           sx={{
                               fontSize: {
                                   md:"26px",
                                   sm: "24px",
                                   xs: "20px"
                               }
                           }}
                       >
                           {currentService.price} uah
                       </Typography>
                       <Typography variant="h4"
                                   sx={{
                                       fontSize: {
                                           md:"36px",
                                           sm: "30px",
                                           xs: "24px"
                                       },
                                       marginY:"15px",
                                       fontWeight: "semibold",
                                       mt: "15px"
                                   }}
                       >Choose a professional e see the slots available</Typography>
                           {arraySpecialist ?
                               <Container sx={{
                                   display: "flex",
                                   gap: "20px",
                                  justifyContent: "center",
                                   paddingY: "10px",
                                   flexWrap: "wrap"
                               }}>
                                   {arraySpecialist.map((item)=>(
                               <Card
                                   key={item.id}
                                   sx={{
                                       maxWidth: {
                                           sm: "300px",
                                           xs: "250px",
                                       },
                                       borderRadius: "10px",
                                       backgroundColor: "white",
                                       "&:hover": {
                                           backgroundColor: "primary.main",
                                           opacity: "0.75"
                                       }
                                   }}
                                   onClick={() => navigate(`/${category}/${service}/${item.id}`) }
                               >
                               <CardActionArea
                               sx={{
                                   height: "100%",
                                   display: "flex",
                                   flexDirection: "column",
                                   alignItems: "flex-start",
                                   justifyContent: "flex-start",
                               }}>
                               <CardMedia
                                   component="img"
                                   image={item.photo}
                                   alt={item.lastName}
                                   sx={{
                                       aspectRatio: 4/3,
                                       objectFit: "cover",
                                       width: {
                                           sm: "300px",
                                           xs: "250px",
                                       },
                                       borderRadius: "7px"
                                   }}
                               />
                               <CardContent>
                                   <Typography
                                       gutterBottom
                                       variant="h5"
                                       component="div"
                                      sx={{
                                          fontSize: {
                                              md:"30px",
                                              sm: "28px",
                                              xs: "24px"
                                          },
                                      }}
                                   >
                                       {item.firstName} {item.lastName}
                                   </Typography>
                                   {item.specializations.map(i=>(
                                       <Typography
                                           variant="body2"
                                           sx={{ color: 'text.secondary',
                                               fontSize: {
                                                   md:"16px",
                                                   sm: "14px",
                                                   xs: "14px"
                                               },
                                       }}>
                                       {i}
                                   </Typography>))}
                                   <Typography
                                       variant="body2"
                                       sx={{
                                           fontSize: {
                                               md:"18px",
                                               sm: "16px",
                                               xs: "16px"
                                           },
                                       }}
                                   >
                                       Experience years: {item.experienceYears}
                                   </Typography>

                               </CardContent>
                               </CardActionArea>
                           </Card> ))}
                               </Container>
                                   : <Typography>No wizards were found. Please try again later.</Typography>}
                   </CardContent>
           </Card>
       </Container>
        </>
    )
}
export default ServicePage;