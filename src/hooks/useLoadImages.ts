import {useEffect, useState} from "react";

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

async function loadImageList() {
    return [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18];
}

export function useLoadImages() {
    const [imageList, setImageList] = useState<string[]>([]);

    useEffect(() => {
        loadImageList().then((list) => setImageList(list));
    }, []);

    return imageList;
}
