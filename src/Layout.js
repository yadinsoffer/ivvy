// src/Layout.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCalendarAlt, faUser, faClock } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #1A1B21;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Sidebar = styled.div`
    width: ${props => (props.isCollapsed ? '0' : '20%')}; /* Set width based on collapse state */
    background-color: #181920;
    padding: 20px;
    color: #FFFFFF;
    position: fixed;
    height: 100%;
    overflow: hidden; /* Hide overflow when collapsed */
    transition: width 0.3s; /* Smooth transition for width change */

    @media (max-width: 768px) {
        width: 100%;
        position: relative;
        height: auto;
    }
`;

const MainContent = styled.div`
    width: ${props => (props.isCollapsed ? '100%' : '60%')}; /* Adjust width based on collapse state */
    margin-left: ${props => (props.isCollapsed ? '0' : '20%')}; /* Adjust margin based on collapse state */
    padding: 20px;
    color: #FFFFFF;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }
`;

const RightPanel = styled.div`
    width: ${props => (props.isCollapsed ? '100%' : '20%')}; /* Adjust width based on collapse state */
    background-color: #1A1B21;
    padding: 20px;
    color: #FFFFFF;
    position: fixed;
    right: 0;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        position: relative;
        height: auto;
    }
`;

const Header = styled.header`
    background-color: #1A1B21;
    padding: 20px;
    color: #FFFFFF;
`;

const NavItem = styled.div`
    padding: 10px 0;
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

const GettingStartedContainer = styled.div`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Layout = () => {
    const [isGroupsOpen, setIsGroupsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <Container>
            <Sidebar isCollapsed={!isSidebarOpen}>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FFFFFF' }}>
                    <FontAwesomeIcon icon={isSidebarOpen ? faChevronLeft : faChevronRight} />
                </button>
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
                
                <GettingStartedContainer>
                    <h3 style={{ color: '#9C27B0' }}>Getting Started</h3>
                    <NavItem style={{ textDecoration: 'line-through', color: '#8E8E93' }}>Complete onboarding</NavItem>
                    <NavItem style={{ color: '#9C27B0' }}>Capture your first meeting</NavItem>
                    <NavItem style={{ color: '#9C27B0' }}>Edit meeting notes</NavItem>
                </GettingStartedContainer>
            </Sidebar>
            <MainContent isCollapsed={!isSidebarOpen}>
                <Header>
                    <h2>Meetings</h2>
                    <p style={{ color: '#8E8E93' }}>This Week</p>
                </Header>
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
            </MainContent>
            <RightPanel isCollapsed={!isSidebarOpen}>
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
            </RightPanel>
        </Container>
    );
};

export default Layout;
