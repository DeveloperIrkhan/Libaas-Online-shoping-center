import React, { useEffect, useState } from 'react'

const ImageLoader = ({ SorceFile, Alt }) => {
    const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     console.log("SorceFile",SorceFile)
    //     if (!SorceFile && !SorceFile===undefined) {
    //         setLoading(false); // Handle undefined or missing image
    //         return;
    //     }
    //     else setLoading(true)

    //     const img = new Image();
    //     img.src = SorceFile;
    //     img.onLoad = () => setLoading(false);
    // }, [SorceFile]);
    return (
        <div className="position-relxative">
            {loading && (
                <div className="spinner-overlay w-100 d-flex align-items-center justify-content-center">
                    <div className="screen">
                        <div className="overflow-hidden">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src='../src/assets/Spinner.svg' className={`p-1 img-fluid`} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <img
                src={SorceFile}
                alt={Alt}
                className={`w-52 h-auto ${loading ? 'd-none' : 'd-block'}`}
                onLoad={() => setLoading(false)}
            />
        </div>


    )
}

export default ImageLoader