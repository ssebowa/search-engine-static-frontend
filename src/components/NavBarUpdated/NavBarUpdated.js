// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { AppBar, Button, Grid, Tab, Tabs, Toolbar, Typography, Box, Item, useTheme, useMediaQuery, Drawer } from "@mui/material";
// import { flexbox } from "@mui/system";

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Logo from "../logo";
// import SearchBarHome from "../searchbarhome/SearchBarHome";
// import NavbarDrawer from "./NavbarDrawer";

// const NavBarUpdated = () => {
//     const theme = useTheme();
//     const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//     const location = useLocation();
//     console.log(location.pathname);

//     const [value, setValue] = useState();

//     const linksArray = [
//         { id: 0, navName: "Home", navLink: "/" },
//         { id: 1, navName: "About", navLink: "/about" },
//         { id: 2, navName: "Gallery", navLink: "/gallery" },
//         { id: 3, navName: "Projects", navLink: "/projects" },
//         { id: 4, navName: "Contact", navLink: "/contact" },
//         { id: 5, navName: "Team", navLink: "/team" },
//     ];
//     return (
//         <>
//             <AppBar
//                 style={{
//                     background: "#fff",
//                 }}
//             >
//                 <Toolbar
//                     sx={{
//                         height: "13vh",
//                     }}
//                 >
//                     {isMatch ? (
//                         <>
//                             <Grid sx={{ placeItems: "center" }} container>
//                                 <Grid item xs={2}>
//                                     {location.pathname != "/" && (
//                                         <Link to="/">
//                                             <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png    `} alt="" />
//                                         </Link>
//                                     )}
//                                 </Grid>
//                                 <Grid item xs={1.5} />
//                                 <Grid item xs={7}>
//                                     <Box
//                                         style={{ width: "200px" }}
//                                         sx={{
//                                             display: "flex",

//                                             mx: "auto",
//                                         }}
//                                     >
//                                         {location.pathname != "/" && <SearchBarHome></SearchBarHome>}
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xs={1.5}>
//                                     <NavbarDrawer linksArray={linksArray}></NavbarDrawer>
//                                 </Grid>
//                             </Grid>
//                         </>
//                     ) : (
//                         <Grid sx={{ placeItems: "center" }} container>
//                             <Grid item xs={1.5} sx={{ px: 4 }}>
//                                 <Link to="/">
//                                     <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="" />
//                                 </Link>
//                             </Grid>

//                             <Grid item xs={1} />

//                             {location.pathname != "/" ? (
//                                 <>
//                                     <Grid item xs={7}>
//                                         <Box
//                                             style={{ width: "500px" }}
//                                             sx={{
//                                                 display: "flex",

//                                                 mx: "auto",
//                                             }}
//                                         >
//                                             <SearchBarHome></SearchBarHome>
//                                         </Box>
//                                     </Grid>
//                                     <Grid item sx={{ ml: "auto", pr: 2 }} xs={1}>
//                                         <NavbarDrawer linksArray={linksArray}></NavbarDrawer>
//                                     </Grid>
//                                     {/* <Grid
//                                         item
//                                         xs={6}
//                                         sx={{
//                                             display: "flex",
//                                             marginLeft: "auto",
//                                         }}
//                                     >
//                                         <Tabs
//                                             indicatorColor="secondary"
//                                             textColor="inherit"
//                                             value={value}
//                                             onChange={(e, val) => setValue(val)}
//                                             sx={{
//                                                 color: "black",
//                                             }}
//                                         >
//                                             {linksArray.map((linkInfo) => (
//                                                 <Tab
//                                                     sx={{
//                                                         fontWeight: "bold",
//                                                         fontSize: 14,
//                                                         ":hover": {
//                                                             color: "#9CDCFE",
//                                                         },
//                                                     }}
//                                                     key={linkInfo.id}
//                                                     label={linkInfo.navName}
//                                                     component={Link}
//                                                     to={linkInfo.navLink}
//                                                 ></Tab>
//                                             ))}
//                                         </Tabs>
//                                     </Grid> */}
//                                 </>
//                             ) : (
//                                 <>
//                                     <Grid item xs={2}></Grid>
//                                     <Grid
//                                         item
//                                         xs={5}
//                                         sx={{
//                                             display: "flex",
//                                             marginLeft: "auto",
//                                         }}
//                                     >
//                                         <Tabs
//                                             sx={{
//                                                 color: "black",
//                                             }}
//                                             indicatorColor="secondary"
//                                             textColor="inherit"
//                                             value={value}
//                                             onChange={(e, val) => setValue(val)}
//                                         >
//                                             {linksArray.map((linkInfo) => (
//                                                 <Tab
//                                                     sx={{
//                                                         fontWeight: "bold",
//                                                         fontSize: 14,
//                                                         ":hover": {
//                                                             color: "#9CDCFE",
//                                                         },
//                                                     }}
//                                                     key={linkInfo.id}
//                                                     label={linkInfo.navName}
//                                                     component={Link}
//                                                     to={linkInfo.navLink}
//                                                 ></Tab>
//                                             ))}
//                                         </Tabs>
//                                     </Grid>
//                                 </>
//                             )}
//                         </Grid>
//                     )}
//                 </Toolbar>
//             </AppBar>
//         </>
//     );
// };

// export default NavBarUpdated;
