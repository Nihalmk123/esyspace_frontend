import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../../context/auth";
import { Popover } from 'react-bootstrap'; // Import Popover component from react-bootstrap

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "../../../Styles/BookConfRoomStyle.css";

function BookConfRoom() {
    const [auth] = useAuth();
    const [showForm, setShowForm] = useState(false);
    const [eventData, setEventData] = useState({
        title: "",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
    });
    const userId = auth.user ? auth.user_id : null;

    const today = new Date().toISOString().split("T")[0]; // Get today's date in ISO format

    // Define handler for date click
    const handleDateClick = (arg) => {
        console.log("Date clicked:", arg.dateStr);
        setShowForm(true);
        setEventData({ ...eventData, startDate: arg.dateStr, endDate: arg.dateStr });
    };

    // Define handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            title: eventData.title,
            start: eventData.startDate + "T" + eventData.startTime,
            end: eventData.endDate + "T" + eventData.endTime,
            user: userId,
        };
        sendFormDataToBackend(newEvent);
        setEventData({
            title: "",
            startDate: "",
            endDate: "",
            startTime: "",
            endTime: "",
        });
        setShowForm(false);
    };

    // Define handler for form cancellation
    const handleCancel = () => {
        setEventData({
            title: "",
            startDate: "",
            endDate: "",
            startTime: "",
            endTime: "",
        });
        setShowForm(false);
    };

    // Define your events
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch booked events from backend
        fetchBookedEvents();
    }, []);

    const fetchBookedEvents = async () => {
        try {
            // Make API call to fetch booked events
            const response = await axios.get("http://127.0.0.1:8000/api/getroombookings");
            setEvents(response.data);
        } catch (error) {
            console.error("Error fetching booked events:", error);
        }
    };

    // Define custom event rendering
    const eventContent = (eventInfo) => {
        return (
            <div className="event-content">
                <p className="event-title" style={{color:"#000"}}>{eventInfo.event.title}</p>
                <p className="event-time" style={{color:"#000"}}>Start: {eventInfo.event.startStr}</p>
                <p className="event-time" style={{color:"#000"}}>End: {eventInfo.event.endStr}</p>
            </div>
        );
    };

    // Function to send form data to the backend
    const sendFormDataToBackend = async (formData) => {
        try {
            console.log("formData", formData);
            const response = await axios.post("http://127.0.0.1:8000/api/bookConfRoom", formData);
            console.log("Form data sent successfully:", response.data);
            fetchBookedEvents(); // Refresh booked events after successful booking
        } catch (error) {
            console.error("Error sending form data:", error);
        }
    };

    // Define popover content
    const popoverContent = (eventInfo) => (
        <Popover id="popover-basic">
            <Popover.Header as="h3">{eventInfo.event.title}</Popover.Header>
            <Popover.Body>
                <p>Start: {eventInfo.event.startStr}</p>
                <p>End: {eventInfo.event.endStr}</p>
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="calendar-wrapper">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"90vh"}
                events={events}
                dateClick={handleDateClick}
                eventContent={eventContent}
                validRange={{ start: today }} // Set valid range starting from today
                eventOverlap={false} // Prevent events from overlapping
                eventConstraint="hours" // Limit events to specific hours
                eventMouseEnter={(eventInfo) => {
                    // Show popover on mouse enter
                    eventInfo.el.setAttribute('data-bs-toggle', 'popover');
                    eventInfo.el.setAttribute('data-bs-placement', 'top');
                    eventInfo.el.setAttribute('title', eventInfo.event.title);
                    eventInfo.el.setAttribute('data-bs-content', `Start: ${eventInfo.event.startStr}<br>End: ${eventInfo.event.endStr}`);
                    new window.bootstrap.Popover(eventInfo.el);
                }}
                eventMouseLeave={(eventInfo) => {
                    // Hide popover on mouse leave
                    const popover = new window.bootstrap.Popover(eventInfo.el);
                    popover.dispose();
                }}
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
                        <div className="form-group">
                            <label htmlFor="start-date">Start Date:</label>
                            <input
                                type="date"
                                id="start-date"
                                value={eventData.startDate}
                                onChange={(e) =>
                                    setEventData({ ...eventData, startDate: e.target.value })
                                }
                                required
                                className="form-input"
                            />
                            <label htmlFor="start-time">Start Time:</label>
                            <input
                                type="time"
                                id="start-time"
                                value={eventData.startTime}
                                onChange={(e) =>
                                    setEventData({ ...eventData, startTime: e.target.value })
                                }
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end-date">End Date:</label>
                            <input
                                type="date"
                                id="end-date"
                                value={eventData.endDate}
                                onChange={(e) =>
                                    setEventData({ ...eventData, endDate: e.target.value })
                                }
                                required
                                className="form-input"
                            />
                            <label htmlFor="end-time">End Time:</label>
                            <input
                                type="time"
                                id="end-time"
                                value={eventData.endTime}
                                onChange={(e) =>
                                    setEventData({ ...eventData, endTime: e.target.value })
                                }
                                required
                                className="form-input"
                            />
                        </div>
                        <button type="submit" className="form-button">
                            Add Event
                        </button>
                        <button type="button" className="form-button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default BookConfRoom;
