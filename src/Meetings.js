// src/Meetings.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { io } from 'socket.io-client'; // Import the Socket.IO client

const socket = io('http://localhost:61372');

const StyledMeetingCard = styled.div`
    background-color: #2A2B31;
    border-radius: 8px;
    padding: 20px;
    margin: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column; /* Stack items vertically */
`;

const MeetingInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px; /* Space between date and meeting name */
    padding-left: 10px; /* Add padding to the left of the icons */
`;

const MeetingDate = styled.h3`
    color: #FFFFFF;
    font-size: 18px;
    margin-left: 10px; /* Space between icon and date */
    margin-right: 10px; /* Space between date and next element */
`;

const MeetingName = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    text-align: center;
`;

const MeetingTime = styled.p`
    color: #8E8E93;
    font-size: 14px;
    text-align: center;
`;

const MeetingsContainer = styled.div`
    padding: 20px; /* Add padding */
`;

const EmptyState = styled.div`
    color: #8E8E93;
    text-align: center;
    margin-top: 20px;
`;

const Meetings = () => {
    const [meetings, setMeetings] = useState([]); // State for meeting data
    const [loading, setLoading] = useState(true); // State for loading status

    useEffect(() => {
        const fetchMeetings = async () => {
            try {
                const response = await fetch('http://127.0.0.1:61372/api/meetings');
                console.log('Response Status:', response.status); // Log the response status
                const data = await response.json();
                console.log('Fetched Data:', data); // Log the fetched data
                setMeetings(data);
            } catch (error) {
                console.error('Error fetching meetings:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMeetings(); // Call the fetch function
    }, []); // Empty dependency array means this runs once on mount

    if (loading) {
        return <div>Loading...</div>; // You can customize this loading state
    }

    return (
        <MeetingsContainer>
            {meetings.length === 0 ? (
                <EmptyState>No meetings scheduled.</EmptyState>
            ) : (
                meetings.map((meeting, index) => (
                    <StyledMeetingCard key={index}>
                        <MeetingInfo>
                            <MeetingDate>{new Date(meeting.date).toLocaleDateString()}</MeetingDate>
                            <MeetingName>{meeting.title}</MeetingName>
                        </MeetingInfo>
                        <MeetingTime>{new Date(meeting.date).toLocaleTimeString()}</MeetingTime>
                        <p><strong>Guests:</strong> {meeting.guests.join(', ')}</p> {/* Display the guests */}
                        {meeting.link && <p><strong>Link:</strong> <a href={meeting.link} target="_blank" rel="noopener noreferrer">{meeting.link}</a></p>} {/* Display the meeting link */}
                    </StyledMeetingCard>
                ))
            )}
        </MeetingsContainer>
    );
};

export default Meetings;
