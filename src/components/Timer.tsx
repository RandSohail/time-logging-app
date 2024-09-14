/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import renderElapsedString from '../helper';

interface ITimer {
  title: string;
  project: string;
  elapsed: any;
  runningSince: any;
}

export default class Timer extends React.Component<ITimer> {
  render() {
    const elapsedString = renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    );
    return (
      <>
        <div className="ui centered card">
          <div className="content">
            <h3 className=""> {this.props.title}</h3>
            <p>{this.props.project}</p>
            <div className="ui two column centered grid">
              <h1 className="column ">{elapsedString}</h1>
            </div>
            <div className="right floated column">
              <i className="trash alternate  icon"></i>
              <i className="edit icon"></i>
            </div>
            <button className="ui basic button fluid blue">Start</button>
          </div>
        </div>
      </>
    );
  }
}
