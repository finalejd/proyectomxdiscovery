import React, { useEffect } from 'react';

const FacebookPage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.defer = true;
        script.setAttribute('data-use-service-core', 'true');

        document.body.appendChild(script);

        // Agregar estilos CSS para ocultar el anuncio
        const style = document.createElement('style');
        style.innerHTML = `
            .elfsight-app-1cdb1302-4e5b-4900-bfae-bc64750fb0e9 .elfsight-popup {
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            // Limpiar el script al desmontar el componente para evitar problemas de carga múltiple
            document.body.removeChild(script);
            // Limpiar los estilos al desmontar el componente
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="elfsight-app-1cdb1302-4e5b-4900-bfae-bc64750fb0e9" data-elfsight-app-lazy />
    );
};

export default FacebookPage;
