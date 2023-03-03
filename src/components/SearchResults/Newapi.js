import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const Newapi = ({ SsebowaResults }) => {
    // console.log();
    return (
        <>
            {SsebowaResults.map((ssebowa, index) => (
                <div className="ResultMainConatiner" key={index} tabIndex="-1">
                    <a target={"_blank"} rel="noreferrer" href={ssebowa.url} className="ResultMainUpperLink">
                        {ssebowa.url}
                    </a>
                    <a target={"_blank"} rel="noreferrer" href={ssebowa.url} className="ResultMainLink">
                        <LinesEllipsis text={ssebowa.title[ssebowa.title.length - 1].value} maxLine="2" ellipsis="..." trimRight basedOn="letters" />
                    </a>
                    <p className="ResultMainDescription">
                        <LinesEllipsis text={ssebowa.extract[ssebowa.extract.length - 1].value} maxLine="4" ellipsis="..." trimRight basedOn="letters" />
                    </p>
                </div>
            ))}
        </>
    );
};

export default Newapi;
