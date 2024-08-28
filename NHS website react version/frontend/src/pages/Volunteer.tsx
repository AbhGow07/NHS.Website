
const Volunteer = () => {
    return (
        <main className="volunteer-container">
            <section className="header-section">
                <h1 className="title">Volunteer Opportunities</h1>
                <p className="description">
                    Check out our upcoming volunteer events and mark your calendar!
                </p>
            </section>
            <section className="calendar-section">
                <iframe 
                    src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles" 
                    className="calendar-iframe"
                    title="Volunteer Calendar"
                    frameBorder="0"
                    scrolling="no"
                ></iframe>
            </section>
        </main>
    )
}

export default Volunteer;