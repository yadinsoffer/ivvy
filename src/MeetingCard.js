import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #2A2B31;
    color: #FFFFFF;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const MeetingCard = ({ meeting }) => {
    return (
        <Card>
            <h3>{meeting.title}</h3>
            <p><strong>Guests:</strong> {meeting.guests.join(', ')}</p>
            <p><strong>Meeting Link:</strong> <a href={meeting.link} target="_blank" rel="noopener noreferrer">{meeting.link}</a></p>
            <p><strong>Date:</strong> {meeting.date}</p>
            <p><strong>Time:</strong> {meeting.time}</p>
        </Card>
    );
};

export default MeetingCard;
