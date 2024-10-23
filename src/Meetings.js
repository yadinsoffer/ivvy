// src/Meetings.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const MeetingCard = styled.div`
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

const Meetings = () => {
    return (
        <>
            <MeetingCard>
                <MeetingInfo>
                    <FontAwesomeIcon icon={faCalendarAlt} color="#FFFFFF" style={{ marginRight: '10px' }} />
                    <MeetingDate>October 22</MeetingDate>
                </MeetingInfo>
                <MeetingName>Interview with John</MeetingName>
                <MeetingInfo>
                    <FontAwesomeIcon icon={faClock} color="#8E8E93" style={{ marginRight: '10px' }} />
                    <MeetingTime>12:00 PM - 1:00 PM</MeetingTime>
                </MeetingInfo>
            </MeetingCard>
            <MeetingCard>
                <MeetingInfo>
                    <FontAwesomeIcon icon={faCalendarAlt} color="#FFFFFF" style={{ marginRight: '10px' }} />
                    <MeetingDate>October 23</MeetingDate>
                </MeetingInfo>
                <MeetingName>Project Kickoff</MeetingName>
                <MeetingInfo>
                    <FontAwesomeIcon icon={faClock} color="#8E8E93" style={{ marginRight: '10px' }} />
                    <MeetingTime>2:00 PM - 3:00 PM</MeetingTime>
                </MeetingInfo>
            </MeetingCard>
            {/* Add more meeting cards as needed */}
        </>
    );
};

export default Meetings;
