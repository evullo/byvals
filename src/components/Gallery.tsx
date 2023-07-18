import { useLoadImages } from "../hooks/useLoadImages.ts";
import {useEffect, useRef} from "react";
import VanillaTilt from "vanilla-tilt";

export default function Gallery() {
    const images = useLoadImages();
    const imgList = useRef<HTMLDivElement[]>([]);

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

    return (
        <>
            <div className={"flex flex-wrap items-center justify-around max-w-[90%] mx-auto mb-10"}>
                {images.map((image, index) => (
                    <div
                        ref={(ref: HTMLDivElement) => (imgList.current[index] = ref)}
                        key={index}
                        className={`block bg-no-repeat bg-center bg-cover rounded-lg m-5 cursor-pointer shadow-lg shadow-primary
                        ${index % 5 === 0 ? "w-36 h-28 md:w-96 md:h-60" : "w-28 h-20 md:w-56 md:h-36"}`}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
        </>
    );
}