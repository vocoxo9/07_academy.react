import { useEffect, useState } from "react";
import { getCatImages } from "../service/apiTest";
import ImageList from "./ImageList";


export default function CatComponent() {
    const [image, setImage] = useState([]);
    
    // useEffect(async() => {
    //     const data = await getCatImages();
    //     console.log(data);
    // }, []);

    const showCatImage = async () => {
        const data = await getCatImages();
        console.log(data);
        const imgUrl = data[0].url;
        setImage([...image, imgUrl]);
        // image = "" 또는 image="http://~~"
    }

    return (
        <>
            <h3>Cat Component</h3>
            <hr />
            <ImageList images={image} shoImage={showCatImage} />
            {/* <button onClick={showImage}>이미지보기</button>
            <div style={{display : 'flex', gap : '5px'}}>
                {/* <img src={image} alt="이미지 로딩중..." width="300px" height="300px" /> 
                { image.map((url,idx)=> {
                    return <img key={"img_" + idx } src={url} 
                        alt="로딩 중..." width={300} height={200} /> ;
                })}
                {/* 화살표함수 - 소괄호로 감싸면 return 필요없음, 중괄호로 감쌀 시 반드시 return 필요 
            </div> */}
        </>
    );
}