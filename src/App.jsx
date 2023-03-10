import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavScrollTop from "./components/nav-scroll-top";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import GalleryPage from "./pages/gallery";
import ServiceDetails from "./templates/service-details";
import TeamPage from "./pages/team";
import FaqPage from "./pages/faq";
import BlogPage from "./pages/blog";
import BlogLeftSidebarPage from "./pages/blog-left-sidebar";
import BlogRightSidebarPage from "./pages/blog-right-sidebar";
import BlogDetailsPage from "./templates/blog-details";
import BlogAuthor from "./templates/blog-author";
import BlogDate from "./templates/blog-date";
import BlogTag from "./templates/blog-tag";
import BlogCategory from "./templates/blog-category";
import ContactPage from "./pages/contact";
import TermsAndConditions from "./pages/terms-and-conditions";
import PrivacyPolicy from "./pages/privacy-policy";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faHouse, faCircleInfo, faHistory, faListCheck, faPhone, faPeopleGroup, faImage, faUser, faStore, faBlog, faComment } from "@fortawesome/free-solid-svg-icons";

// import "swiper/components/navigation/navigation.scss";
// import "swiper/swiper.scss";
import "./assets/css/vendor/metropolis.css";
import "./assets/css/vendor/icofont.min.css";
import "./assets/css/vendor/font-awesome.css";
import "./assets/css/vendor/material-design-iconic.min.css";
import "./assets/css/plugins/animate.min.css";
import "./assets/scss/style.scss";
import SearchPage from "./pages/search";
import SearchBotPage from "./pages/search-bot";
import ErrorPage from "./pages/error";

const App = () => {
    return (
        <Router>
            <NavScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={HomePage} />
                    <Route path={`${process.env.PUBLIC_URL + "/bot"}`} component={SearchBotPage} />
                    <Route path={`${process.env.PUBLIC_URL + "/search"}`} component={SearchPage} />

                    <Route path={`${process.env.PUBLIC_URL + "/about"}`} component={AboutPage} />
                    <Route path={`${process.env.PUBLIC_URL + "/gallery"}`} component={GalleryPage} />

                    {/* <Route
                        path={`${
                            process.env.PUBLIC_URL + "/service-details/:id"
                        }`}
                        component={ServiceDetails}
                    /> */}
                    <Route path={`${process.env.PUBLIC_URL + "/team"}`} component={TeamPage} />
                    <Route path={`${process.env.PUBLIC_URL + "/faq"}`} component={FaqPage} />
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`} component={ContactPage} />
                    <Route path={`${process.env.PUBLIC_URL + "/projects"}`} component={BlogPage} />
                    <Route path={`${process.env.PUBLIC_URL + "/terms-and-conditions"}`} component={TermsAndConditions} />
                    <Route path={`${process.env.PUBLIC_URL + "/privacy-policy"}`} component={PrivacyPolicy} />
                    {/* <Route
                        path={`${
                            process.env.PUBLIC_URL + "/blog-left-sidebar"
                        }`}
                        component={BlogLeftSidebarPage}
                    /> */}
                    {/* <Route
                        path={`${process.env.PUBLIC_URL + "/blog/:_page?"}`}
                        component={BlogRightSidebarPage}
                    /> */}
                    <Route path={`${process.env.PUBLIC_URL + "/project-details/:id"}`} component={BlogDetailsPage} />
                    {/* <Route
                        path={`${process.env.PUBLIC_URL + "/author/:author"}`}
                        component={BlogAuthor}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/date/:date"}`}
                        component={BlogDate}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/tag/:slug"}`}
                        component={BlogTag}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/category/:slug"}`}
                        component={BlogCategory}
                    /> */}
                    <Route component={ErrorPage} />
                </Switch>
            </NavScrollTop>
        </Router>
    );
};

export default App;

library.add(fab, faBars, faHouse, faCircleInfo, faHistory, faListCheck, faPhone, faPeopleGroup, faImage, faUser, faStore, faBlog, faComment);
