import React from 'react';
import styled from 'styled-components';
import TimerList from './TimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

export default class TimersDashboard extends React.Component {
  render() {
    return (
      <TimerDashboardContainer>
        <div className="ui three column centered grid">
          <div className="column">
            <TimerList />
            <ToggleableTimerForm isOpen={false} />
          </div>
        </div>
      </TimerDashboardContainer>
    );
  }
}

const TimerDashboardContainer = styled.div`
  border: 1px solid green;
`;
