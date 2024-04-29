import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../../../Styles/BookConfRoomStyle.css'
function BookConfRoom() {
    // Define initial state for the form
    const [showForm, setShowForm] = useState(false);
    const [eventData, setEventData] = useState({ title: "", startDate: "", endDate: "" });

    // Define handler for date click
    const handleDateClick = (arg) => {
        console.log("Date clicked:", arg.dateStr);
        setShowForm(true);
        setEventData({ ...eventData, startDate: arg.dateStr, endDate: arg.dateStr });
    };

    // Define handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add event to the events array
        const newEvent = { title: eventData.title, start: eventData.startDate, end: eventData.endDate };
        setEvents([...events, newEvent]);
        // Reset form data
        setEventData({ title: "", startDate: "", endDate: "" });
        // Hide form
        setShowForm(false);
    };

    // Define handler for form cancellation
    const handleCancel = () => {
        // Reset form data
        setEventData({ title: "", startDate: "", endDate: "" });
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

    // Define custom event rendering
    const eventContent = (eventInfo) => {
        return (
            <div>
                <p style={{color:"white"}}>{eventInfo.event.title}</p>
                <p style={{color:"white"}}>{eventInfo.event.start.toLocaleDateString()}</p>
                <p style={{color:"white"}}>{eventInfo.event.end ? eventInfo.event.end.toLocaleDateString() : ''}</p>
            </div>
        );
    };

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
                height={"60vh"} 
                width={"60%"} 
                events={events} 
                dateClick={handleDateClick} 
                eventContent={eventContent} 
            />
            {showForm && (
                
                <div className="form-container">
                    <h4 className="text-center mb-5">Add event</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={eventData.title}
                            onChange={(e) =>
                                setEventData({ ...eventData, title: e.target.value })
                            }
                            placeholder="Event name"
                            required
                            className="form-input"
                        />
                        <input
                            type="date"
                            value={eventData.startDate}
                            onChange={(e) =>
                                setEventData({ ...eventData, startDate: e.target.value })
                            }
                            required
                            className="form-input"
                        />
                        <input
                            type="date"
                            value={eventData.endDate}
                            onChange={(e) =>
                                setEventData({ ...eventData, endDate: e.target.value })
                            }
                            required
                            className="form-input"
                        />
                        <button type="submit" className="form-button">Add Event</button>
                        <button type="button" className="form-button" onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default BookConfRoom;
