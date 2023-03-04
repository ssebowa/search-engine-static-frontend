import PropTypes from "prop-types";
import React from "react";

// import shape10 from "../../assets/images/shape/shape-10.png";

import IconBox from "../../../components/icon-box";
import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";

import "../../../assets/css/floatingAnimations.css";

const IconBoxContainer = ({ classOption }) => {
    return (
        // <div
        //     className={`icon-area feature-section position-relative ${classOption}`}
        //     style={{
        //         backgroundImage:
        //             'url("https://res.cloudinary.com/dicgvondb/image/upload/v1675617744/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/3_j1pj2w_a2cbd8.png")',
        //         backgroundRepeat: "no-repeat",
        //         backgroundPosition: "100% 60%",
        //     }}
        // >
        //     <SectionTitle
        //         classOption="title-section mt-10 p-3 text-center"
        //         title="<h1 class='text-primary'>What Your Searches <span class='text-dark' >Does</span> </h1> "
        //         excerptClassOption="null"
        //         excerpt="Lets Have a Look"
        //     />
        //     <div className="container custom-container">
        //         <div className="row g-0 align-items-center">
        //             {/* <div className="col-xl-6 col-lg-8 mx-auto mb-3 text-center">
        //                 <SectionTitle
        //                     classOption="title-section"
        //                     subTitle="FEATURES"
        //                     title="We are <span class='text-primary'>different</span> because..."
        //                     excerptClassOption="mb-10"
        //                     excerpt="Pleasure rationally encounter consequences that are extremely
        //                     painful. Nor again is there anyone who loves or pursues or
        //                     desires to obtain"
        //                 />
        //                 <Button
        //                     classOption="btn btn-lg btn-dark btn-hover-dark"
        //                     text="Get Started"
        //                     path="/about"
        //                 />
        //             </div> */}

        //             <div className="col-12 my-3">
        //                 <div id="grid" className="grid row mb-n7">
        //                     {HomeData[2].iconBox &&
        //                         HomeData[2].iconBox.map((single, key) => {
        //                             return <IconBox key={key} data={single} />;
        //                         })}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="moving-element-1">
        //         <img
        //             src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668346/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/shape-3_hhfdxw.png"
        //             alt=""
        //         />
        //     </div>
        //     <div className="moving-element-2">
        //         <img
        //             src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668347/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/shape-4_rtiey1.png"
        //             alt=""
        //         />
        //     </div>
        //     <div className="moving-element-3">
        //         <img
        //             src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668346/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/shape-14_gsd9i6.png"
        //             alt=""
        //         />
        //     </div>
        //     <div className="moving-element-4">
        //         <img
        //             src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668347/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/shape-6_mpkw3r.png"
        //             alt=""
        //         />
        //     </div>
        //     <div className="moving-element-5">
        //         <img
        //             src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668347/ssebowa/ssebowa.org/search-engine-static-frontend/images/shape/shape-8_ugllqi.png"
        //             alt=""
        //         />
        //     </div>
        // </div>
        <div></div>
    );
};

IconBoxContainer.propTypes = {
    classOption: PropTypes.string,
};

IconBoxContainer.defaultProps = {
    classOption: "section-pb",
};

export default IconBoxContainer;
