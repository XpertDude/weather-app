import { useState, useEffect } from "react";
import img1 from '../images/slideShowimages/1512324.jpg';
import img2 from '../images/slideShowimages/1512274.jpg';
import img3 from '../images/slideShowimages/1512283.jpg';
import img4 from '../images/slideShowimages/1512287.jpg';
import img5 from '../images/slideShowimages/1512289.jpg';
import img6 from '../images/slideShowimages/1512302.jpg';
import img7 from '../images/slideShowimages/1512303.jpg';
import img8 from '../images/slideShowimages/1512312.jpg';
import img9 from '../images/slideShowimages/1512317.jpg';
import img10 from '../images/slideShowimages/37948.jpg';

const moviePosters = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
];

const SlideShow = () => {
    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTransition(false); // Disable transition momentarily
            setIndex((prevIndex) => (prevIndex + 1) % moviePosters.length);
        }, 10000);
        
        return () => clearInterval(intervalId);
    }, [index]);

    const handleDotClick = (i) => {
        setTransition(false);
        setIndex(i);
    };

    useEffect(() => {
        setTransition(true);
    }, [index]);

    return (
        <div className="slideshow-container all">
            <img
                className={`image-slide ${transition ? 'fade-in' : 'fade-out'}`}
                src={moviePosters[index]}
                alt={`poster-${index}`}
            />
            <div className="dots-container">
                {moviePosters.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SlideShow;
