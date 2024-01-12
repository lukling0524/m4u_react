import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
// import { ScrollMagic, Controller, Scene } from 'scrollmagic';
import { Controller, Scene } from 'react-scrollmagic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Tween } from 'gsap/gsap-core';
import { Tween } from 'react-gsap';

gsap.registerPlugin(ScrollTrigger);

function Tweentest() {
    const style = {
        height: '1500px',
        border: '1px solid #000000',
    };

    let tl = new gsap.timeline();

    useEffect(() => {
        tl.to('.testtest', { duration: 2, x: 500 }, 'queue').to('.testtest2', { duration: 2, x: 500 }, 'queue+=0.2');

        //         const section03Animation = tl
        //             .to('#section03 .section__title', 0.5, { y: 20, opacity: 0, ease: 'easeOutQuint' }, 'queue')
        //             .to('#section03 .section__desc', 0.8, { y: 20, opacity: 0, ease: 'easeOutQuint' }, 'queue+=0.2')
        //             .to('#section03 .panel', 0.8, { y: 20, opacity: 0, ease: 'easeOutQuint' }, 'queue+=0.5');
        //
        //         new ScrollMagic.Scene({
        //             triggerElement: '.triggerTest',
        //             triggerHook: 0.7,
        //         })
        //             .setTween(section03Animation)
        //             .addTo(tl);
    });

    return (
        <>
            <Box01 className="testtest"></Box01>
            <Box02 className="testtest2"></Box02>
            <div style={style}></div>
            <div id="target"></div>
            <Controller>
                <Scene triggerElement="#target">
                    {(progress) => (
                        <Tween
                            to={{
                                x: '500px',
                                scrollTrigger: {
                                    trigger: '#target',
                                    markers: true,

                                    // start: ' center',
                                    // end: ' center',
                                    // scrub: 0.5,
                                },
                            }}
                            stagger={0.5}
                        >
                            <Box01 className="testtest3"></Box01>
                            <Box02 className="testtest4"></Box02>
                        </Tween>
                    )}
                </Scene>
            </Controller>
            <div style={style}></div>
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
