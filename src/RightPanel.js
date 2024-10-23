// src/RightPanel.js
import React from 'react';
import styled from 'styled-components';

const RightPanelContainer = styled.div`
    width: 20%;
    background-color: #1A1B21;
    padding: 20px;
    color: #FFFFFF;
    position: fixed;
    right: 0;
    height: 100%;
    overflow-y: auto; /* Allow scrolling if content overflows */
    border-left: 1px solid white; /* Add a thin white border on the left */
`;

const UpcomingMeeting = styled.div`
    margin: 10px 0;
`;

const UpcomingDate = styled.p`
    color: #8E8E93;
    font-size: 14px;
`;

const UpcomingMeetingName = styled.p`
    color: #FFFFFF;
    font-size: 16px;
`;

const UpcomingMeetingTime = styled.p`
    color: #8E8E93;
    font-size: 14px;
`;

const RightPanel = () => {
    return (
        <RightPanelContainer>
            <h2>Upcoming Meetings</h2>
            <UpcomingMeeting>
                <UpcomingDate>October 24, Tuesday</UpcomingDate>
                <UpcomingMeetingName>Interview with Ron</UpcomingMeetingName>
                <UpcomingMeetingTime>3:00 PM - 4:00 PM</UpcomingMeetingTime>
            </UpcomingMeeting>
            <UpcomingMeeting>
                <UpcomingDate>October 25, Wednesday</UpcomingDate>
                <UpcomingMeetingName>Team Sync</UpcomingMeetingName>
                <UpcomingMeetingTime>10:00 AM - 11:00 AM</UpcomingMeetingTime>
            </UpcomingMeeting>
            <UpcomingMeeting>
                <UpcomingDate>October 26, Thursday</UpcomingDate>
                <UpcomingMeetingName>Client Call</UpcomingMeetingName>
                <UpcomingMeetingTime>1:00 PM - 2:00 PM</UpcomingMeetingTime>
            </UpcomingMeeting>
            {/* Add more upcoming meetings as needed */}
        </RightPanelContainer>
    );
};

export default RightPanel;
