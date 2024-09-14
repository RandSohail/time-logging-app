import React from 'react';
import TimerForm from './TimerForm';

interface IToggleableTimerForm {
  isOpen: boolean;
}

export default class ToggleableTimerForm extends React.Component<IToggleableTimerForm> {
  AddTimer() {
    console.log('Toggleable Timer Form is clicked');
  }

  render() {
    return (
      <>
        {this.props.isOpen ? (
          <TimerForm />
        ) : (
          <button
            className="ui basic button fluid blue"
            onClick={this.AddTimer}
          >
            <i className="plus icon" />
          </button>
        )}
      </>
    );
  }
}
