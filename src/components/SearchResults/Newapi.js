// import React from "react";
// import LinesEllipsis from "react-lines-ellipsis";
// import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import LinesEllipsis from "react-lines-ellipsis";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function Newapi({ SsebowaResults }) {
    // const [items, setItems] = useState(SsebowaResults);
    // console.log(items);

    return (
        <div className="App">
            <hr className="seperator" />
            <div className="carousel-wrapper">
                <Carousel breakPoints={breakPoints}>
                    {SsebowaResults.map((ssebowa) => (
                        <Item key={ssebowa}>
                            <div className="ResultMainConatiner  " tabIndex="-1">
                                <a target={"_blank"} rel="noreferrer" href={ssebowa.url} className="ResultMainUpperLink">
                                    {ssebowa.url}
                                </a>
                                <a target={"_blank"} rel="noreferrer" href={ssebowa.url} className="ResultMainLink">
                                    <LinesEllipsis
                                        text={ssebowa.title[ssebowa.title.length - 1].value}
                                        maxLine="2"
                                        ellipsis="..."
                                        trimRight
                                        basedOn="letters"
                                    />
                                </a>
                                <p className="ResultMainDescription">
                                    <LinesEllipsis
                                        text={ssebowa.extract[ssebowa.extract.length - 1].value}
                                        maxLine="4"
                                        ellipsis="..."
                                        trimRight
                                        basedOn="letters"
                                    />
                                </p>
                            </div>
                        </Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Newapi;

// const Newapi = ({ SsebowaResults }) => {
//     return (
//         <>
//             {SsebowaResults.map((ssebowa, index) => (
// <div className="ResultMainConatiner  " key={index} tabIndex="-1">
//     <a target={"_blank"} rel="noreferrer" href={ssebowa.url} className="ResultMainUpperLink">
//         {ssebowa.url}
//     </a>
//     <a target={"_blank"} rel="noreferrer" href={ssebowa.url} className="ResultMainLink">
//         <LinesEllipsis text={ssebowa.title[ssebowa.title.length - 1].value} maxLine="2" ellipsis="..." trimRight basedOn="letters" />
//     </a>
//     <p className="ResultMainDescription">
//         <LinesEllipsis text={ssebowa.extract[ssebowa.extract.length - 1].value} maxLine="4" ellipsis="..." trimRight basedOn="letters" />
//     </p>
// </div>
//             ))}
//         </>
//     );
// };
