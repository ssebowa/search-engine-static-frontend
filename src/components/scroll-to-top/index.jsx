import React, { useEffect, useState } from "react";

const ScrollToTop = (props) => {
    const [stick, setStick] = useState(false);
    const [visible, setVisible] = useState(false);
    const onClickHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    setTimeout(() => {
        setVisible(false);
    }, 10000);

    useEffect(() => {
        var position = window.pageYOffset;

        const scrollHandler = () => {
            let scrollPos = window.pageYOffset;
            if (scrollPos < 200) {
                setStick(false);
            } else if (scrollPos < position) {
                setStick(true);
                setVisible(true);
            } else {
                setStick(false);
                setVisible(true);
            }
            position = scrollPos;
        };

        window.addEventListener("scroll", function () {
            scrollHandler();
        });
        return () => {
            window.removeEventListener("scroll", function () {
                scrollHandler();
            });
        };
    }, [stick]);

    return (
        <div>
            <button type="button" className={`scroll-to-top ${visible ? "show" : ""}`} onClick={onClickHandler} {...props}>
                {stick ? (
                    <div>
                        <i className="arrow-top icofont-long-arrow-up"></i>
                        <i className="arrow-bottom icofont-long-arrow-up"></i>
                    </div>
                ) : (
                    <div>
                        <i className="arrow-top icofont-long-arrow-down"></i>
                        <i className="arrow-bottom icofont-long-arrow-up"></i>
                    </div>
                )}
            </button>
        </div>
    );
};

export default ScrollToTop;
