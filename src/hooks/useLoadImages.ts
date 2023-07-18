import {useEffect, useState} from "react";

async function loadImageList() {
    const images = import.meta.glob('/src/assets/gallery/*.jpeg');
    return Object.keys(images);
}

export function useLoadImages() {
    const [imageList, setImageList] = useState<string[]>([]);

    useEffect(() => {
        loadImageList().then((list) => setImageList(list));
    }, []);

    return imageList;
}
