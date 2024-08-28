import React, { useState } from 'react';

const faqs = [
    {
        question: 'How do I join the NHS?',
        answer: 'You can join the NHS by filling out the membership application form available on our forms page. Ensure you meet the eligibility criteria.'
    },
];

const Contact = () => {
    const [showAnswer, setShowAnswer] = useState<number | null>(null);

    return (
        <main className="contact-container">
            <h1>Contact Info and FAQs</h1>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div 
                            className="faq-question" 
                            onClick={() => setShowAnswer(showAnswer === index ? null : index)}
                        >
                            {faq.question}
                        </div>
                        {showAnswer === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </section>

            {/* Google Forms Contact Form */}
            <section className="contact-form-section">
                <h2>Contact Us</h2>
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfQm8Q2rJ6m7x6mYvY8B1U1J8x6F8_YU5gFUkNxRnQe4blbZQ/viewform?embedded=true" 
                    width="100%" 
                    height="600" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Contact Form"
                >
                    Loading…
                </iframe>
            </section>
        </main>
    );
};

export default Contact;
