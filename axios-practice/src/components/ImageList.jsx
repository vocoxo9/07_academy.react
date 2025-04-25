

export default function ImageList({ images, showImage }) {

    return (
        <>
            <button onClick={showImage}>이미지보기</button>
            <div style={{ display: 'flex', gap: '5px', flexWrap : 'wrap' }}>
                {/* <img src={image} alt="이미지 로딩중..." width="300px" height="300px" /> */}
                {images.map((url, idx) => {
                    return <img key={"img_" + idx} src={url}
                        alt="로딩 중..." width={200} height={200} />;
                })}
                {/* 화살표함수 - 소괄호로 감싸면 return 필요없음, 중괄호로 감쌀 시 반드시 return 필요 */}
            </div>
        </>
    );

}