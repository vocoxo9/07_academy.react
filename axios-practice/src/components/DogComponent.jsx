import { useState } from "react";
import ImageList from "./ImageList";
import { getDogImages } from "../services/apiTest";

export default function DogComponent() {
    const [list, setList] = useState([]);

    const showDogImages = async () => {
        const data = await getDogImages();
        setList([...list, data[0].url]);
    }

    return (
        <>
            <p>Dog Component</p>
            <hr/>
            <ImageList images={list} 
                       showImage={showDogImages} />

        </>
    )
}