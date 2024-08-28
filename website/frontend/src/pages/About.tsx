import React from 'react';

const officers = [
    {
        name: 'blank',
        title: 'President',
        description: 'desc',
        imageUrl: ''
    },
    {
        name: 'blank',
        title: 'Vice President',
        description: 'desc',
        imageUrl: ''
    },
    {
        name: 'blank',
        title: 'Secretary',
        description: 'esc',
        imageUrl: ''
    },
    {
        name: 'blank',
        title: 'Treasurer',
        description: 'desc',
        imageUrl: ''
    },
];

const About = () => {
    return (
        <main className="about-container">
            {/* Introduction Section */}
            <section className="introduction-section">
                <h1>About Our Club</h1>
                <div className="introduction-content">
                    <div className="introduction-text">
                        <h2>96 Years Of Tradition</h2>
                        <p>The National Honor Society (NHS) is the nation's premier organization established to recognize outstanding high school students. More than just an honor roll, NHS serves to honor those students who have demonstrated excellence in the areas of scholarship, leadership, service, and character. These characteristics have been associated with membership in the organization since its beginning in 1921.</p>
                        <h2>Meetings and Attendance</h2>
                        <p>Chapter meetings will occur regularly throughout the school year. If you are unable to attend an upcoming meeting, please email us at jhshonorsociety@gmail.com at least 24 hours in advance in order for us to excuse your absence!​</p>
                    </div>
                    <div className="introduction-images">
                        <img src="" alt="Club Activity 1" className="intro-image" />
                    </div>
                </div>
            </section>

            {/* Officer Grid */}
            <section className="officer-grid">
                <h2>Meet Our Officers</h2>
                {officers.map((officer, index) => (
                    <div key={index} className="officer-card">
                        <img src={officer.imageUrl} alt={`${officer.name}`} className="officer-image" />
                        <h3>{officer.name}</h3>
                        <h4>{officer.title}</h4>
                        <p>{officer.description}</p>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default About;
