interface RestorentImagesProps {
    images: string[];  // Expecting an array of image URLs
}
function Restorentimages({ images }: { images: string }) {
    console.log(images)
    const safeImages = Array.isArray(images) ? images : [];

    return (
        <>
            <div>
                <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                    5 photos
                </h1>
                <div className="flex flex-wrap">
                    {safeImages.map((image, index) => (
                        <img
                            key={index}
                            className="w-56 h-44 mr-1 mb-1"
                            src={image}
                            alt={`Restaurant image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Restorentimages;