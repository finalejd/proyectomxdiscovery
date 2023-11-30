import React from "react";
import imagenuno from "../assets/Gifs y Pixel Art/1.jpeg";
import imagendos from "../assets/Gifs y Pixel Art/2.jpeg";
import imagentres from "../assets/Gifs y Pixel Art/3.jpg";
import imagencuatro from "../assets/Gifs y Pixel Art/4.jpeg";
import imagencinco from "../assets/Gifs y Pixel Art/5.jpeg";
import imagenseis from "../assets/Gifs y Pixel Art/6.gif";
import imagensiete from "../assets/Gifs y Pixel Art/7.gif";
import imagenocho from "../assets/Gifs y Pixel Art/8.gif";
import imagenueve from "../assets/Gifs y Pixel Art/9.jpg";
import imagendiez from "../assets/Gifs y Pixel Art/10.png";
import imagonce from "../assets/Gifs y Pixel Art/11.gif";
import imagendoce from "../assets/Gifs y Pixel Art/12.png";
import imagentrece from "../assets/Gifs y Pixel Art/13.gif";
import imagencatorce from "../assets/Gifs y Pixel Art/14.gif";

const Gallery = () => {
    const images = [
        imagenuno,
        imagendos,
        imagentres,
        imagencuatro,
        imagencinco,
        imagenseis,
        imagensiete,
        imagenocho,
        imagenueve,
        imagendiez,
        imagonce,
        imagendoce,
        imagentrece,
        imagencatorce,
    ];

    return (<>
        <br /><br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((imagen, index) => (
                <div key={index} className="overflow-hidden bg-gray-200 rounded-lg">
                    <img className="h-64 w-full object-cover" src={imagen} alt={`Imagen ${index + 1}`} />
                </div>
            ))}
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>

    );

};

export default Gallery;
