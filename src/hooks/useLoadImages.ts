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

async function loadImageList(): Promise<Image[]> {
    return [
        {
            src: p1,
            width: 1024,
            height: 680
        },
        {
            src: p2,
            width: 1024,
            height: 680
        },
        {
            src: p3,
            width: 780,
            height: 1024
        },
        {
            src: p4,
            width: 1024,
            height: 780
        },
        {
            src: p5,
            width: 1024,
            height: 680
        },
        {
            src: p6,
            width: 1024,
            height: 680
        },
        {
            src: p7,
            width: 1024,
            height: 680
        },
        {
            src: p8,
            width: 680,
            height: 1024
        },
        {
            src: p9,
            width: 1024,
            height: 680
        },
        {
            src: p10,
            width: 1024,
            height: 680
        },
        {
            src: p11,
            width: 680,
            height: 1024
        },
        {
            src: p12,
            width: 1024,
            height: 680
        },
        {
            src: p13,
            width: 1024,
            height: 680
        },
        {
            src: p14,
            width: 1024,
            height: 680
        },
        {
            src: p15,
            width: 1024,
            height: 1024
        },
        {
            src: p16,
            width: 1024,
            height: 890
        },
        {
            src: p17,
            width: 1024,
            height: 900
        },
        {
            src: p18,
            width: 1024,
            height: 760
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
