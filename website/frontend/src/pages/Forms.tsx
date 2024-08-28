import React from 'react';

const forms = [
    {
        title: 'Debrief Form',
        description: 'Remember to fill this out after leading an event to receive your leadership point if you wrote your name down on the event sign-up spreadsheet to be the debrief form leader for an event. If there were two leaders for your event, one debrief form will suffice, but make sure to add both names.',
        formUrl: 'https://forms.gle/yFTTpu6HuKauMrmo7'
    },
    {
        title: 'Event Sign-in Sheet',
        description: 'If you have signed up to be the sign-in sheet leader for an event by adding your name to the event sign-up spreadsheet, print out this form and bring it with you to the event. Make sure all NHS members at the same shift/event are accounted for on the sheet! STAPLE AND TURN IN WITH YOUR HOUR LOG AT THE END OF EVERY SEMESTER.',
        formUrl: 'https://drive.google.com/file/d/1MO2hv1Vi1xeQe9_I-88Wa0E5MMcCkPrZ/view?usp=sharing'
    },
    {
        title: 'Hour Logs',
        description: 'This is proof that you have volunteer hours. If you lose your log, your hours will not be accounted for unless you are able to re-verify your attendance at the event. THESE WILL BE COLLECTED AT THE END OF EVERY SEMESTER',
        formUrl: 'https://drive.google.com/file/d/1VB9yIhYRRxqw1RjMocPaqlsdeb4vxrfR/view?usp=sharing'
    },
    {
        title: 'Outside Hour Logs',
        description: 'Fill out this form if you would like any volunteer hours outside of NHS to be counted as part of your total semester hours. If you lose your log, your hours cannot be accounted for. Make sure to turn this in WITH your regular hour log at the end of the semester. THESE WILL BE COLLECTED AT THE END OF EVERY SEMESTER​',
        formUrl: 'https://drive.google.com/file/d/1TpjWrsosHjs71Nhu2b9BKRYY5cELBQ7A/view?usp=sharing'
    },
    {
        title: 'Tutoring Hour Logs',
        description: "Have the student sign this sheet for proof of the volunteer hours. You CAN IGNORE the Advisor Information if you're tutoring someone through NHS. If you lose your log, your hours will not be accounted for. As a reminder, tutoring people who are not in the NHS tutoring program do NOT count as tutoring hours - those will count as outside hours. Finally, group tutoring will satisfy your leadership point requirement! THESE WILL BE COLLECTED AT THE END OF EVERY SEMESTER",
        formUrl: 'https://drive.google.com/file/d/1bUM1ErPlzDKI5QsK_PYI3FklWCE6CN4Z/view?usp=sharing'
    },
];

const Forms = () => {
    return (
        <main className="forms-container">
            <h1>Forms</h1>
            <p>Please find below all the necessary forms for NHS activities.</p>
            <div className="forms-grid">
                {forms.map((form, index) => (
                    <div key={index} className="form-card">
                        <h3>{form.title}</h3>
                        <p>{form.description}</p>
                        <a href={form.formUrl} target="_blank" rel="noopener noreferrer" className="download-link">
                            View Form
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Forms;
