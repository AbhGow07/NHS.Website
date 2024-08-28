import React from 'react';

const VolunteerIdeas = () => {
    return (
        <main className="volunteer-ideas-container">
            <section className="volunteer-ideas-section">
                <h1>Submit Your Volunteer Ideas</h1>
                <p>
                    We are always looking for new and exciting volunteer opportunities. If you have an idea that you'd like to share with the NHS, please use the form below to submit your suggestion.
                </p>
            </section>

            <section className="form-section">
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdJY8_Pp6m_Z8yF8bOeSgqXHG0k8K6b0wXxjhgY0m_1sy0m8A/viewform?embedded=true"
                    width="100%" 
                    height="600" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Volunteer Ideas Form"
                >
                    Loading…
                </iframe>
            </section>
        </main>
    );
};

export default VolunteerIdeas;
