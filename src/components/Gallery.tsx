import { useLoadImages } from "../hooks/useLoadImages.ts";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { buildLayoutFlat, Image } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryT() {
    const images = useLoadImages();
    const imgList = useRef<HTMLDivElement[]>([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
    const galleryRef = useRef<HTMLDivElement>(null);

    const thumbnails = buildLayoutFlat<Image>(images, {
        containerWidth: galleryRef.current ? galleryRef.current.getBoundingClientRect().width : window.innerWidth,
        margin: 16,
    });

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
    }, [images]);

    return (
        <div className={`lg:w-10/12 mx-auto`}>
            <div ref={galleryRef} className={`flex flex-wrap justify-center`}>
                {thumbnails.map((item, index) => (
                    <div
                        key={index}
                        ref={(ref: HTMLDivElement) => (imgList.current[index] = ref)}
                        className={`relative bg-transparent p-0 m-4 cursor-pointer shadow-lg animate-enterScreen`}
                        style={{animationDelay: `${index * 150}ms`, visibility: 'hidden'}}
                        onClick={() => setSelectedImageIndex(index)}
                    >
                        <div
                            className={`overflow-hidden rounded-md`}
                            style={{ width: item.viewportWidth, maxHeight: item.scaledHeight }}
                        >
                            <img
                                className={`transition-all ease-in-out duration-500 hover:transform hover:scale-125`}
                                src={item.src}
                                alt={item.alt}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={selectedImageIndex >= 0}
                close={() => setSelectedImageIndex(-1)}
                index={selectedImageIndex}
                slides={images}
            />
        </div>
    );
}