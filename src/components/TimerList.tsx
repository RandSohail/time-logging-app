import React from 'react';
import styled from 'styled-components';
import EditableTimer from './EditableTimer';

const timerData = [
  {
    title: 'Learn React',
    project: 'Web Domination',
    elapsed: '8986300',
    runningSince: null,
    editFormOpen: false
  },
  {
    title: 'Learn extreme ironing',
    project: 'World Domination',
    elapsed: '3890985',
    runningSince: null,
    editFormOpen: true
  }
];
export default class EditableTimerList extends React.Component {
  render() {
    return (
      <EditableTimerListContainer>
        <h1>This is the TimerList Component</h1>
        <EditableTimer {...timerData[0]} />
        <EditableTimer {...timerData[0]} />
        <EditableTimer {...timerData[0]} />
        <EditableTimer {...timerData[1]} />
      </EditableTimerListContainer>
    );
  }
}

const EditableTimerListContainer = styled.div`
  border: 1px solid yellow;
`;
