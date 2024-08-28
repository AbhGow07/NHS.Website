import React from 'react';

const photos = [
    {
        src: 'src/assets/react.svg',
        alt: 'Description of photo 1',
        description: 'This is a description for photo 1'
    },
];

const Gallery = () => {
    return (
        <main className="gallery-container">
            <section className="gallery-section">
                <h1>Gallery</h1>
                <div className="gallery-grid">
                    {photos.map((photo, index) => (
                        <div key={index} className="gallery-item">
                            <img src={photo.src} alt={photo.alt} className="gallery-image" />
                            <div className="gallery-description">
                                {photo.description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Gallery;
