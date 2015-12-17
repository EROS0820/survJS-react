/* @flow */
import React from 'react';

export default class Editable extends React.Component {
  render(): ReactElement {
    const {value, onEdit, onValueClick, editing, ...props} = this.props;

    return (
      <div {...props}>
        {editing ? this.renderEdit() : this.renderValue()}
      </div>
    );
  }
  renderEdit: () => ReactElement = () => {
    return <input type="text"
      autoFocus={true}
      defaultValue={this.props.value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };
  renderValue: () => ReactElement = () => {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.props.onValueClick}>
        <span className="value">{this.props.value}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  };
  renderDelete: () => ReactElement = () => {
    return <button className="delete" onClick={this.props.onDelete}>x</button>;
  };
  checkEnter: (e: Object) => void = () => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
  finishEdit: (e: Object) => void = () => {
    this.props.onEdit(e.target.value);
  };
}
