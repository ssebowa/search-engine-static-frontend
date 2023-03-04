import React from "react";

import CausesPage from "../components/causes";
import PrivacyPolicyData from "../data/privacyPolicy.json";

import SEO from "../components/seo";

import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import StickyChatBot from "../components/stickyChatBot";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";

const PrivacyPolicy = () => {
    return (
        <div>
            <>
                <SEO title="Ssebowa - Terms and Conditions" />
                <NavBarUpdated2></NavBarUpdated2>
                <PageBanner className="text-center" title="Privacy Policies" excerpt="Our privacy policies" image="./images/service/privacy.png" />

                <div className="mt-10 pt-10 ">
                    <h4 className="h3 text-center">PRIVACY POLICY</h4>
                    <p className="mx-1"></p>
                </div>
                <div>
                    <ul className="list-unstyled m-5 p-5">
                        {PrivacyPolicyData &&
                            PrivacyPolicyData.map((policy) => {
                                return (
                                    <li key={policy.key} className="py-3">
                                        <CausesPage key={policy.key} data={policy}></CausesPage>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <Footer></Footer>
            </>
            <StickyChatBot />
        </div>
    );
};

export default PrivacyPolicy;
