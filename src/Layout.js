// src/Layout.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #1A1B21;
`;

const Sidebar = styled.div`
    width: 20%;
    background-color: #181920;
    padding: 20px;
    color: #FFFFFF;
    position: fixed;
    height: 100%;
`;

const MainContent = styled.div`
    width: 60%;
    margin-left: 20%;
    padding: 20px;
    color: #FFFFFF;
`;

const RightPanel = styled.div`
    width: 20%;
    background-color: #1A1B21;
    padding: 20px;
    color: #FFFFFF;
    position: fixed;
    right: 0;
    height: 100%;
`;

const Header = styled.header`
    background-color: #1A1B21;
    padding: 20px;
    color: #FFFFFF;
`;

const NavItem = styled.div`
    padding: 20px 0;
    color: #FFFFFF;
    font-size: 14px;
    display: flex;
    align-items: center;
`;

const Icon = styled.span`
    color: #8E8E93;
    margin-right: 10px;
`;

const MeetingCard = styled.div`
    background-color: #2A2B31;
    border-radius: 8px;
    padding: 20px;
    margin: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const MeetingDate = styled.h3`
    color: #FFFFFF;
    font-size: 18px;
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

const Layout = () => {
    const [isGroupsOpen, setIsGroupsOpen] = useState(false);

    return (
        <Container>
            <Sidebar>
                <h1>Ivvy</h1>
                <p><strong>Testing Inc</strong></p>
                <p style={{ color: '#8E8E93' }}>Starter • 1 member</p>
                <NavItem><Icon>📅</Icon>Meetings</NavItem>
                <NavItem><Icon>🤖</Icon>Agents (Beta)</NavItem>
                <NavItem><Icon>✅</Icon>Tasks</NavItem>
                <NavItem><Icon>🔗</Icon>Shared with you</NavItem>
                <NavItem><Icon>📚</Icon>Learn</NavItem>
                <NavItem onClick={() => setIsGroupsOpen(!isGroupsOpen)}>
                    <Icon>➕</Icon>Groups
                </NavItem>
                {isGroupsOpen && <NavItem style={{ color: '#8E8E93' }}>Group 1</NavItem>}
                {isGroupsOpen && <NavItem style={{ color: '#8E8E93' }}>Group 2</NavItem>}
                <h3 style={{ color: '#9C27B0' }}>Getting Started</h3>
                <NavItem style={{ textDecoration: 'line-through', color: '#8E8E93' }}>Complete onboarding</NavItem>
                <NavItem style={{ color: '#9C27B0' }}>Capture your first meeting</NavItem>
                <NavItem style={{ color: '#9C27B0' }}>Edit meeting notes</NavItem>
            </Sidebar>
            <MainContent>
                <Header>
                    <h2>Meetings</h2>
                    <p style={{ color: '#8E8E93' }}>This Week</p>
                </Header>
                <MeetingCard>
                    <MeetingDate>October 22</MeetingDate>
                    <MeetingName>Interview with John</MeetingName>
                    <MeetingTime>12:00 PM - 1:00 PM</MeetingTime>
                </MeetingCard>
                <MeetingCard>
                    <MeetingDate>October 23</MeetingDate>
                    <MeetingName>Project Kickoff</MeetingName>
                    <MeetingTime>2:00 PM - 3:00 PM</MeetingTime>
                </MeetingCard>
                {/* Add more meeting cards as needed */}
            </MainContent>
            <RightPanel>
                <h2>Upcoming meetings</h2>
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
            </RightPanel>
        </Container>
    );
};

export default Layout;
