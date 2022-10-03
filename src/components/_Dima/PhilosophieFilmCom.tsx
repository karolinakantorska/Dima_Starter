import React from 'react';
export default function PhilosophieFilmCom({ url }: { url: string }) {

    return (
        <video
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
            }}
            controls={false}
            autoPlay={true}
            muted
            loop={false}
            playsInline
            src={url}

        >
            {/*<source
                media="all and (min-width: 1523px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664798286/DIMA/DIMA_IntroMovie_1920x1080_khihuj.webm"
                type="video/webm"
        />*/}
            <source
                media="all and (min-width: 901px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664800485/DIMA/DIMA_Video_Philosophie_1600x900_y7ns02.mov"
                type="video/mp4"
            />


            <source
                media="all and (max-width: 900px)"
                src="https://res.cloudinary.com/dhzdoqnzv/video/upload/v1664800485/DIMA/DIMA_Video_Philosophie_900x506_wrwcae_oeioer.mov"
                type="video/mp4"
            />
            {/*<source src={'/video/DIMA_IntroMovie.mp4'} type="video/mp4" />*/}
            Your browser does not support the video tag.
        </video>
    )
}