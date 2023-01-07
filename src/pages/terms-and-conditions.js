import React from "react";

import CausesPage from "../components/causes";
import CausesData from "../data/causes.json";

import { Container } from "react-bootstrap";
import SEO from "../components/seo";

function TermsAndConditions(props) {
    return (
        <Container className="my-3 py-3">
            <SEO title="Ssebowa - Terms and Conditions" />
            <div>
                <h4 className="h3">TERMS OF SERVICE OUTLINE</h4>
                <p className="mx-1">
                    We understand that it is tempting to skip the terms of
                    service but you must ascertain your expectations from us as
                    you use the Ssebowa website and get to know what we expect
                    from you. These Terms of Service illustrate the way Ssebowa
                    functions, the rules and regulations that apply to our
                    company and certain things that we believe to be right.
                    Resultantly, the Terms of Service show your interaction with
                    Ssebowa as you make use of our services. It is crucial to
                    understand our terms because by using our services, you are
                    agreeing to them. Visiting our website or purchasing
                    something from our online store indicates commitment and
                    agreement to following the terms that apply to everyone who
                    makes use of our site. Kindly peruse these Terms of Service
                    carefully before accessing or using our website. If you do
                    not agree to all the Terms of Service of this agreement,
                    then you may not access the website or use any of our
                    services.
                </p>
            </div>
            <div>
                <ul className="list-unstyled my-3 px-3">
                    {CausesData &&
                        CausesData.map((cause) => {
                            return (
                                <li key={cause.key} className="py-3">
                                    <CausesPage
                                        key={cause.key}
                                        data={cause}
                                    ></CausesPage>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </Container>
    );
}

export default TermsAndConditions;
