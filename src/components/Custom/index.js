// import React, { useState } from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Cart from '../Cart';
import TeamHomeEight from '../HomeEight/TeamHomeEight';
import TestimonialHomeEight from '../HomeEight/TestimonialHomeEight';
import FooterHomeFive from '../HomeFive/FooterHomeFive';
import HeaderHomeFive from '../HomeFive/HeaderHomeFive';
import HeroHomeFour from '../HomeFour/HeroHomeFour';
import BlogHomeOne from '../HomeOne/BlogHomeOne';
import FaqHomeOne from '../HomeOne/FaqHomeOne';
import ProjectHomeOne from '../HomeOne/ProjectHomeOne';
import ShowCaseHomeThree from '../HomeThree/ShowCaseHomeThree';
import FeaturesHomeTwo from '../HomeTwo/FeaturesHomeTwo';
import ServicesHomeTwo from '../HomeTwo/ServicesHomeTwo';
import VideoPlayerHomeTwo from '../HomeTwo/VideoPlayerHomeTwo';
import Drawer from '../Mobile/Drawer';
import SearchModule from '../SearchModule';

function CustomHome() {
    const [search, searchAction] = useToggle(false);
    const [cart, cartAction] = useToggle(false);
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <SearchModule value={search} searchToggle={searchAction.toggle} />
            <Cart value={cart} action={cartAction.toggle} />
            <HeaderHomeFive
                action={drawerAction.toggle}
                cartToggle={cartAction.toggle}
                searchToggle={searchAction.toggle}
            />
            <HeroHomeFour />
            <TeamHomeEight />
            <TestimonialHomeEight />
            <FaqHomeOne />
            <BlogHomeOne />
            <ServicesHomeTwo />
            <VideoPlayerHomeTwo />
            <ShowCaseHomeThree />
            <FeaturesHomeTwo />
            <ProjectHomeOne />
            <FooterHomeFive />
            <BackToTop className="back-to-top-5" />
        </>
    );
}

export default CustomHome;
