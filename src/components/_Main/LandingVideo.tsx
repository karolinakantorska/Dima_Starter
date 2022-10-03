import React from 'react';

export default function LandingVideo() {
    //console.log('DIMA_IntroMovie', DIMA_IntroMovie)

    return (
        <video
            style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                overflow: "hidden",
            }}
            controls={false}
            autoPlay
            muted
            loop
            playsInline
        >
            <source
                media="all and (min-width: 1523px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798286/DIMA/DIMA_IntroMovie_1920x1080_khihuj.webm"
                type="video/webm"
            />
            <source
                media="all and (min-width: 1523px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798292/DIMA/DIMA_IntroMovie_1920x1080_omfqi4.mp4"
                type="video/mp4"
            />

            <source
                media="all and (max-width: 1524px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798917/DIMA/DIMA_IntroMovie_1600x900_qinzlf.webm"
                type="video/webm"
            />
            <source
                media="all and (max-width: 1524px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798288/DIMA/DIMA_IntroMovie_1600x900_ozm2bi.mp4"
                type="video/mp4"
            />

            <source
                media="all and (max-width: 1200px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798913/DIMA/DIMA_IntroMovie_1200x675_ajapxy.webm"
                type="video/webm"
            />
            <source
                media="all and (max-width: 1200px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798289/DIMA/DIMA_IntroMovie_1200x675_m47kb9.mp4"
                type="video/mp4"
            />

            <source
                media="all and (max-width: 900px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798909/DIMA/DIMA_IntroMovie_900x506_q14lyv.webm"
                type="video/webm"
            />
            <source
                media="all and (max-width: 900px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798289/DIMA/DIMA_IntroMovie_900x506_dlhpil.mp4"
                type="video/mp4"
            />

            <source
                media="all and (max-width: 600px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798908/DIMA/DIMA_IntroMovie_600x338_hphjli.webm"
                type="video/webm"
            />
            <source
                media="all and (max-width: 600px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798281/DIMA/DIMA_IntroMovie_600x338_vmsabj.mp4"
                type="video/mp4"
            />

            <source
                media="all and (max-width: 450px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798908/DIMA/DIMA_IntroMovie_450x253_qhmbzy.webm"
                type="video/webm"
            />
            <source
                media="all and (max-width: 450px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798279/DIMA/DIMA_IntroMovie_450x253_wrxgje.mp4"
                type="video/mp4"
            />

            Your browser does not support the video tag.
        </video>
    )
};
/*
    xs: 0,
    mobile: 450,
    sm: 600,
    md: 900,
    lm: 1200,
    lg: 1524,
    xl: 1917,
    */