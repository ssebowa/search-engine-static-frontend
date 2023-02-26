// import { useEffect, useRef } from "react";
// import Button from "../../components/button";
// import SectionTitle from "../../components/section-title";
// // import Parallax from "parallax-js";
// import WorksData from "../../../src/data/works.json";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// const AboutContainer = () => {
//     const sceneEl = useRef(null);

//     useEffect(() => {
//         const parallaxInstance = new Parallax(sceneEl.current, {
//             relativeInput: true,
//         });

//         parallaxInstance.enable();

//         return () => parallaxInstance.disable();
//     }, []);
//     return (
//         <div className="about-us position-relative">
//             <div className="container">
//                 <div className="row mb-n7 align-items-center">
//                     <div className="col-xl-5 col-md-6 offset-xl-1 mb-7">
//                         <div className="about-content">
//                             <SectionTitle
//                                 classOption="title-section"
//                                 subTitle="Way of Working"
//                                 title=" Learn About How <span class='text-primary'>SSEBOWA</span><br className='d-none d-xl-block' />
//                                 works"
//                             />
//                             <span className="date-meta">
//                                 Scince 2001 <span className="hr"></span>
//                             </span>
//                             <p className="mb-2">Like any other search engine we get our revenue from advertising but we 100% respect your privacy.</p>

//                             <ul
//                                 style={{
//                                     display: "flex",
//                                     alignItems: "flex-start",
//                                     flexDirection: "column",
//                                 }}
//                             >
//                                 {WorksData.map((work) => (
//                                     <li key={work.key} className="p-2 text-dark">
//                                         <FontAwesomeIcon
//                                             icon={faCheckCircle}
//                                             size="xl"
//                                             style={{
//                                                 color: "#56D52C",
//                                             }}
//                                         />

//                                         <b
//                                             className="p-2"
//                                             dangerouslySetInnerHTML={{
//                                                 __html: work.title,
//                                             }}
//                                         ></b>
//                                     </li>
//                                 ))}
//                             </ul>

//                             <Button
//                                 classOption="btn btn-lg btn-dark btn-hover-dark"
//                                 text="Learn more"
//                                 path="/about"
//                             />
//                         </div>
//                     </div>
//                     <div className="col-xl-6 order-lg-first col-md-6 mb-7">
//                         <div className="about-photo scene text-center text-lg-left" id="scene" ref={sceneEl}>
//                             <div className="mt-4" data-depth="0.2">
//                                 <img
//                                     className="coll-imgs"
//                                     src="https://res.cloudinary.com/dicgvondb/image/upload/v1674668369/ssebowa/ssebowa.org/search-engine-static-frontend/images/about/2_zmj8ev.jpg"
//                                     alt="about"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutContainer;
import React from "react";

const index = () => {
    return <div></div>;
};

export default index;
