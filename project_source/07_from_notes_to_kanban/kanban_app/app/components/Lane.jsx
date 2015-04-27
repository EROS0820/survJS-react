'use strict';
import React from 'react';
import {branch} from 'baobab-react/decorators';
import PropTypes from 'baobab-react/prop-types';
import Notes from './Notes';

@branch({
  cursors: function() {
    return {
      // XXX: this shouldn't know anything about lanes (problem of parent)
      lane: ['lanes', this.props.index],
    };
  }
})
export default class Lane extends React.Component {
  static contextTypes = {
    tree: PropTypes.baobab,
    cursors: PropTypes.cursor
  }
  constructor(props: {
    index: number;
  }) {
    super(props);
  }
  render() {
    var cursor = this.context.cursors.lane;
    var lane = this.props.lane;
    var index = this.props.index;

    return (
      <div className='lane'>
        <div className='name'>{lane.name}</div>
        <Notes index={index} />
      </div>
    );
  }
}
