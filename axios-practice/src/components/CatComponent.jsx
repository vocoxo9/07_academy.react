import { useState } from 'react';
import { getCatImages } from '../services/apiTest';
import ImageList from './ImageList';

export default function CatComponent() {
    const [image, setImage] = useState([]);
    // useEffect(()=>{
    //     const data = getCatImages();
    //     console.log(data);
    // }, []);

    const showImage = async () => {
        const data = await getCatImages();
        console.log(data);
        // setImage(data[0].url);
        // image = "" 또는 image = "http://~~~"
        const imgUrl = data[0].url;
        setImage([...image, imgUrl]);
    }

    return (
        <>
            <p>Cat Component</p>
            <hr/>
            <ImageList images={image} showImage={showImage} />
            {/*
            <button onClick={showImage}>이미지 보기</button>
            <div style={{display:'flex', gap:'5px', flexWrap: 'wrap'}}>
                { image.map((url, idx)=>(
                    <img key={"img_"+idx} src={url} alt="로딩중.." 
                         width={200} height={200} />
                ))}
            </div>
             */}
        </>
    )
}