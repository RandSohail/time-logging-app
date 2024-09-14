import React from 'react';
// title={this.props.title}
//   project={this.props.project}

interface ITimerForm {
  title?: string;
  project?: string;
}

export default class TimerForm extends React.Component<ITimerForm> {
  updateForm() {
    console.log('update button has been clicked');
  }
  cancelForm() {
    console.log('cancel button has been clicked');
  }
  handelInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
    console.log(e.target.name, e.target.value);
  }

  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <>
        <div className="ui centered card">
          <div className="content">
            <div className="ui form">
              <div className="field">
                <label> Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={this.props.title}
                  onChange={this.handelInputValue}
                />
              </div>
              <div className="field">
                <label> Project</label>
                <input
                  type="text"
                  name="project"
                  defaultValue={this.props.project}
                  onChange={this.handelInputValue}
                />
              </div>
              <div className="ui two bottom attached buttons">
                <button
                  className="ui basic blue button"
                  onClick={this.updateForm}
                >
                  {submitText}
                </button>
                <button
                  className="ui basic red button"
                  onClick={this.cancelForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
