/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

interface IEditableTimerProps {
  editFormOpen: boolean;
  title: string;
  project: string;
  elapsed: string;
  runningSince: any;
}

export default class EditableTimer extends React.Component<IEditableTimerProps> {
  render() {
    if (this.props.editFormOpen) {
      return (
        <TimerForm title={this.props.title} project={this.props.project} />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }
  }
}
