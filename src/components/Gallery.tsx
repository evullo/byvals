import { useLoadImages } from "../hooks/useLoadImages.ts";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { gsap } from "gsap";

export default function Gallery() {
    const images = useLoadImages();
    const imgList = useRef<HTMLDivElement[]>([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    useEffect(() => {
        if(images.length > 0) {
            const options = {
                scale: 1.05,
                perspective: 5000,
                speed: 1000,
                max: 20
            };

            const items = imgList.current;
            VanillaTilt.init(items, options);
        }
    }, [images]);

    useEffect(() => {
        const animateFullscreen = (showFullscreen) => {
            const fullscreenElement = document.getElementById("fullscreen-image");

            gsap.to(fullscreenElement, {
                duration: 0.5,
                opacity: showFullscreen ? 1 : 0,
                scale: showFullscreen ? 1 : 0.2,
                onComplete: () => {
                    if (!showFullscreen) {
                        setSelectedImageIndex(null);
                    }
                },
            });
        };

        if (selectedImageIndex !== null) {
            animateFullscreen(true);
        } else {
            animateFullscreen(false);
        }
    }, [selectedImageIndex]);

    return (
        <>
            <div
                id="fullscreen-image"
                className={`fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75`}
                onClick={() => setSelectedImageIndex(null)}
                style={{pointerEvents: selectedImageIndex !== null ? "auto" : "none"}}
            >
                {selectedImageIndex !== null && (
                    <img
                        src={images[selectedImageIndex]}
                        alt={`Image ${selectedImageIndex + 1}`}
                        className="max-h-full w-11/12 rounded-lg animate-enterScreen md:max-w-full md:w-fit"
                    />
                )}
            </div>

            <div className={"flex flex-wrap items-center justify-around max-w-[90%] mx-auto mb-10"}>
                {images.map((image, index) => (
                    <div ref={(ref: HTMLDivElement) => (imgList.current[index] = ref)}
                         key={index}
                         className={`relative overflow-hidden rounded-lg m-5 shadow-xl drop-shadow-xl 
                         ${index % 5 === 0 ? "w-36 h-28 md:w-96 md:h-60" : "w-28 h-20 md:w-56 md:h-36"}`}
                         onClick={() => setSelectedImageIndex(index)}
                    >
                        <div
                            className={`absolute w-full h-full bg-no-repeat bg-center bg-cover cursor-pointer 
                            transition-all duration-500 ease-in-out hover:scale-110`}
                            style={{ backgroundImage: `url(${image})` }}
                        >
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}