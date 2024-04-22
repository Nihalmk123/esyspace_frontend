import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function BookConfRoom() {
    // Define initial state for the form
    const [showForm, setShowForm] = useState(false);
    const [eventData, setEventData] = useState({ title: "", date: "" });

    // Define handler for date click
    const handleDateClick = (arg) => {
        console.log("Date clicked:", arg.dateStr);
        setShowForm(true);
        setEventData({ ...eventData, date: arg.dateStr });
    };


    // Define handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add event to the events array
        const newEvent = { title: eventData.title, start: eventData.date };
        setEvents([...events, newEvent]);
        // Reset form data
        setEventData({ title: "", date: "" });
        // Hide form
        setShowForm(false);
    };

    // Define handler for form cancellation
    const handleCancel = () => {
        // Reset form data
        setEventData({ title: "", date: "" });
        // Hide form
        setShowForm(false);
    };

    // Define your events
    const [events, setEvents] = useState([
        {
            title: "Meeting",
            start: "2024-04-21", // Start date of the event
            end: "2024-04-21",   // End date of the event (optional)
        },
        // You can add more events here
    ]);

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"90vh"}
                events={events} // Pass the events array to the FullCalendar component
                dateClick={handleDateClick} // Handle date click
            />
            {showForm && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: '999', borderRadius: '5px' }}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={eventData.title}
                            onChange={(e) =>
                                setEventData({ ...eventData, title: e.target.value })
                            }
                            placeholder="Event name"
                            required
                        />
                        <button type="submit">Add Event</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            )}

        </div>
    );
}

export default BookConfRoom;
