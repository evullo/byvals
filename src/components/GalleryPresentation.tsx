import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function GalleryPresentation() {
    const itemRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const clickedMap = new Map<HTMLDivElement, boolean>();
        const items = itemRefs.current;

        const expand = (item: HTMLDivElement, i: number) => {
            items.forEach((it, ind) => {
                if (i === ind) return;
                clickedMap.set(it, false);
            });

            gsap.to(items, {
                width: '10vw',
                duration: 2,
                ease: 'elastic(1, .6)',
            });

            clickedMap.set(item, !clickedMap.get(item));
            gsap.to(item, {
                width: clickedMap.get(item) ? '40vw' : '10vw',
                duration: 2.5,
                ease: 'elastic(1, .3)',
            });
        };

        items.forEach((item, i) => {
            clickedMap.set(item, false);
            item.addEventListener('click', () => expand(item, i));
        });
    }, []);

    return (
        <div className="w-full flex justify-around items-center overflow-hidden mb-5">
            <div
                ref={(ref: HTMLDivElement) => (itemRefs.current[0] = ref)}
                className="ITEM bg-[url('src/assets/home/pres1.jpeg')] w-[10vw] h-36 bg-center bg-cover cursor-pointer
                block rounded-lg my-5 md:h-64 lg:h-96"
            ></div>

            <div
                ref={(ref: HTMLDivElement) => (itemRefs.current[1] = ref)}
                className="ITEM bg-[url('src/assets/home/pres2.jpeg')] w-[42vw] h-36 bg-center bg-cover cursor-pointer
                block rounded-lg my-5 md:h-64 lg:h-96"
            ></div>

            <div
                ref={(ref: HTMLDivElement) => (itemRefs.current[2] = ref)}
                className="ITEM bg-[url('src/assets/home/pres3.jpeg')] w-[10vw] h-36 bg-center bg-cover cursor-pointer
                block rounded-lg my-5 md:h-64 lg:h-96"
            ></div>
        </div>
    );
}
