import React from "react";
import Accordion, {
    AccordionItem,
    AccordionTitle,
    AccordionContent,
} from "../accrodion";

const AccordionWrap = () => {
    return (
        <Accordion classOption="accordion-style2 no-bg">
            <AccordionItem id="one">
                <AccordionTitle id="one">
                    <span className="question-tag">Q:</span>How does Ssebowa make money??
                </AccordionTitle>
                <AccordionContent id="one">
                    We are currently focused on building the best possible search experience. We will explore monetization ideas in the future to support our
                    charity activities and also developing, and we look forward to your feedback in that process. Ssebowa currently has no ads. None of the
                    results you see get preferential treatment due to advertising. We will never have targeted, privacy-invading ads. We will never follow you
                    around the internet or sell your data. We may have private (i.e. query-dependent) ads in the future. For example, if you search for an air
                    compressor, you may see an air compressor ad, but it won’t be linked to you and it won’t invade your privacy. Ssebowa currently gets the
                    money for its charity activities from its online store
                </AccordionContent>
            </AccordionItem>
            
        </Accordion>
    );
};

export default AccordionWrap;
