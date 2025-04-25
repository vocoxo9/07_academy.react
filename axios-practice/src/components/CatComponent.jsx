import { useEffect } from "react";
import { getCatImages } from "../service/apiTest";


export default function CatComponent() {

    useEffect(() => {
        const data = getCatImages();
        console.log(data);
    }, []);

    return (
        <>
            <h3>Cat Component</h3>
            <hr />
            

        </>
    );
}