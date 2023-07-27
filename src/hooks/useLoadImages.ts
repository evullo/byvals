import {useEffect, useState} from "react";
import {Image} from "react-grid-gallery";

import p1 from '../assets/gallery/p1.jpeg';
import p2 from '../assets/gallery/p2.jpeg';
import p3 from '../assets/gallery/p3.jpeg';
import p4 from '../assets/gallery/p4.jpeg';
import p5 from '../assets/gallery/p5.jpeg';
import p6 from '../assets/gallery/p6.jpeg';
import p7 from '../assets/gallery/p7.jpeg';
import p8 from '../assets/gallery/p8.jpeg';
import p9 from '../assets/gallery/p9.jpeg';
import p10 from '../assets/gallery/p10.jpeg';
import p11 from '../assets/gallery/p11.jpeg';
import p12 from '../assets/gallery/p12.jpeg';
import p13 from '../assets/gallery/p13.jpeg';
import p14 from '../assets/gallery/p14.jpeg';
import p15 from '../assets/gallery/p15.jpeg';
import p16 from '../assets/gallery/p16.jpeg';
import p17 from '../assets/gallery/p17.jpeg';
import p18 from '../assets/gallery/p18.jpeg';

// interface Image {
//     src: string,
//     width: number,
//     height: number
// }

async function loadImageList(): Promise<Image[]> {
    return [
        {
            src: p1,
            width: 512,
            height: 340
        },
        {
            src: p2,
            width: 512,
            height: 340
        },
        {
            src: p3,
            width: 390,
            height: 512
        },
        {
            src: p4,
            width: 512,
            height: 390
        },
        {
            src: p5,
            width: 512,
            height: 340
        },
        {
            src: p6,
            width: 512,
            height: 340
        },
        {
            src: p7,
            width: 512,
            height: 340
        },
        {
            src: p8,
            width: 340,
            height: 500
        },
        {
            src: p9,
            width: 512,
            height: 340
        },
        {
            src: p10,
            width: 512,
            height: 340
        },
        {
            src: p11,
            width: 340,
            height: 500
        },
        {
            src: p12,
            width: 512,
            height: 340
        },
        {
            src: p13,
            width: 512,
            height: 340
        },
        {
            src: p14,
            width: 512,
            height: 340
        },
        {
            src: p15,
            width: 512,
            height: 512
        },
        {
            src: p16,
            width: 512,
            height: 445
        },
        {
            src: p17,
            width: 512,
            height: 450
        },
        {
            src: p18,
            width: 512,
            height: 380
        }
    ]
}

export function useLoadImages() {
    const [imageList, setImageList] = useState<Image[]>([]);

    useEffect(() => {
        loadImageList().then((list) => setImageList(list));
    }, []);

    return imageList;
}
