import { useState } from "react";
import { getDogImages } from "../service/apiTest";
import ImageList from "./ImageList";


export default function DogComponent() {
    const [list, setList] = useState([]);

    const showDogImage = async () => {
        const data = await getDogImages();
        setList([...list, data[0].url]);
    }

    return (
        <>
            <h3>Dog Component</h3>
            <hr />
            {/* <button onClick={showDogImage}>강아지 보기</button> */}
            <ImageList images={list} shoImage={showDogImage} />
        </>
    );
}