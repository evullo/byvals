import { useLoadImages } from "../hooks/useLoadImages.ts";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { gsap } from "gsap";

export default function Gallery() {
    const images = useLoadImages();
    const imgList = useRef<HTMLDivElement[]>([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [showFullScreen, setShowFullScreen] = useState<boolean>(false);

    useEffect(() => {
        if(images.length > 0) {
            const items = imgList.current;

            items.map((item, index) => {
                setTimeout(() => {
                    item.style.visibility = 'visible';
                    VanillaTilt.init(item, {
                        scale: 1.05,
                        perspective: 5000,
                        speed: 1000,
                        max: 20
                    });
                }, index * 150)
            })
        }

        const fullscreenElement = document.getElementById("fullscreen-image");
        const animateFullscreen = (element, showFullscreen) => {
            gsap.to(element, {
                duration: 0.5,
                opacity: showFullscreen ? 1 : 0,
                scale: showFullscreen ? 1 : 0.2,
                onComplete: () => {
                    if (!showFullscreen) setSelectedImageIndex(null)
                }
            });
        };

        if (selectedImageIndex !== null) animateFullscreen(fullscreenElement, showFullScreen)
    }, [images, selectedImageIndex, showFullScreen]);

    return (
        <>
            {selectedImageIndex !== null && (
                <div
                    id="fullscreen-image"
                    className={`fixed z-40 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75`}
                    onClick={() => setShowFullScreen(false)}
                >
                    <img
                        src={images[selectedImageIndex]}
                        alt={`Image ${selectedImageIndex + 1}`}
                        className="max-h-full w-11/12 rounded-lg animate-enterScreen md:max-w-full md:w-fit"
                    />
                </div>
            )}

            <div className={"z-0 flex flex-wrap items-center justify-around max-w-[90%] mx-auto mb-10"}>
                {images.map((image, index) => (
                    <div ref={(ref: HTMLDivElement) => (imgList.current[index] = ref)}
                         key={index}
                         className={`relative overflow-hidden rounded-lg m-5 shadow-xl drop-shadow-xl animate-enterScreen
                         ${index % 5 === 0 ? "w-36 h-28 md:w-96 md:h-60" : "w-28 h-20 md:w-56 md:h-36"}`}
                         style={{animationDelay: `${index * 150}ms`, visibility: 'hidden'}}
                         onClick={() => {
                             setShowFullScreen(true);
                             setSelectedImageIndex(index);
                         }}>
                        <div
                            className={`absolute w-full h-full bg-no-repeat bg-center bg-cover cursor-pointer 
                            transition-all duration-500 ease-in-out hover:scale-110 active:z-0`}
                            style={{ backgroundImage: `url(${image})` }}>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}