import React, { useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
// import { ScrollMagic, Controller, Scene } from 'scrollmagic';
import * as ScrollMagic from 'scrollmagic';
// import { Controller, Scene } from 'react-scrollmagic';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Tween } from 'gsap/gsap-core';
// import { Tween } from 'react-gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { ScrollMagicPluginIndicator } from 'scrollmagic-plugins';

ScrollMagicPluginIndicator(ScrollMagic);
ScrollMagicPluginGsap(ScrollMagic, gsap);

function Tweentest() {
    const style = {
        marginTop: '500px',
        height: '300px',
        border: '1px solid #000000',
    };

    let tl = new gsap.timeline();

    useEffect(() => {
        // tl.to('.testtest', { duration: 2, x: 500 }, 'queue').to('.testtest2', { duration: 2, x: 500 }, 'queue+=0.2');

        const scrollControler = new ScrollMagic.Controller();

        let timelineTest = tl
            .fromTo('.testtest5', 2, { duration: 2, x: 0 }, { x: 500, overwrite: false, immediateRender: false }, 'queue')
            .fromTo('.testtest6', 2, { duration: 2, x: 200 }, { x: 500, overwrite: false, immediateRender: false }, 'queue+=0.2');

        let scrolltest = new ScrollMagic.Scene({
            triggerElement: '#target',
            triggerHook: 0.2,
            //duration: 0,
        })
            .setTween(timelineTest)
            .addIndicators({ name: 'section 222' })
            .addTo(scrollControler);
    }, []);

    return (
        <>
            <Box01 className="testtest"></Box01>
            <Box02 className="testtest2"></Box02>
            <div style={style}></div>
            <div id="target">TARGET</div>
            {/* <Controller>
                <Scene triggerElement="#target">
                    {(progress) => (
                        <Tween
                        //                             to={{
                        //                                 x: '500px',
                        //                                 scrollTrigger: {
                        //                                     trigger: '#target',
                        //                                     markers: true,
                        //
                        //                                     // start: ' center',
                        //                                     // end: ' center',
                        //                                     // scrub: 0.5,
                        //                                 },
                        //                             }}
                        //                             stagger={0.5}
                        >
                            <Box01 className="testtest3"></Box01>
                            <Box02 className="testtest4"></Box02>
                        </Tween>
                    )}
                </Scene>
            </Controller> */}
            <div id="target2" style={style}>
                <Box01 className="testtest5"></Box01>
                <Box02 className="testtest6"></Box02>
            </div>
        </>
    );
}

const Box01 = styled.div`
    width: 100px;
    height: 100px;
    background-color: #dddddd;
`;

const Box02 = styled.div`
    width: 100px;
    height: 100px;
    background-color: #333333;
`;

export default Tweentest;
