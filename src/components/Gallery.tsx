import { useLoadImages } from "../hooks/useLoadImages.ts";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { buildLayoutFlat, Image } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
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
        <div className={`lg:w-10/12 mx-auto z-0`}>
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
                            className={`overflow-hidden`}
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
                className={`z-10 transition-all duration-500 ease-linear`}
                open={selectedImageIndex >= 0}
                close={() => setSelectedImageIndex(-1)}
                index={selectedImageIndex}
                slides={images}
                plugins={[Thumbnails]}
                thumbnails={{ border: 0, vignette: false, borderRadius: 0, padding: 0 }}
                styles={{
                    container: {
                        backgroundColor: "rgba(0, 0, 0, .7)"
                    },
                    thumbnail: {
                        filter: "drop-shadow(10px 5px 10px #000)"
                    },
                    thumbnailsContainer: {
                        backgroundColor: "#FEF6F7"
                    }
                }}
            />
        </div>
    );
}