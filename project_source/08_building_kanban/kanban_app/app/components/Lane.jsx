import uuid from 'node-uuid';
import AltContainer from 'alt/AltContainer';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable.jsx';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceData = sourceProps.data || {};

    if(!targetProps.notes.length) {
      LaneActions.attachToLane({
        laneId: targetProps.id,
        noteId: sourceData.id
      });
    }
  }
};

@DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Lane extends React.Component {
  render() {
    const { connectDropTarget, id, name, notes, ...props } = this.props;

    return connectDropTarget(
      <div {...props}>
        <div className='lane-header'>
          <Editable className='lane-name' value={name}
            onEdit={this.editName.bind(null, id)} />
          <div className='lane-add-note'>
            <button onClick={this.addNote.bind(null, id)}>+</button>
          </div>
        </div>
        <AltContainer
          stores={[NoteStore]}
          inject={ {
            items: () => NoteStore.get(notes)
          } }
        >
          <Notes
            onEdit={this.editNote.bind(null, id)}
            onDelete={this.deleteNote.bind(null, id)} />
        </AltContainer>
      </div>
    );
  }
  addNote(laneId) {
    const noteId = uuid.v4();

    NoteActions.create({id: noteId, task: 'New task'});
    LaneActions.attachToLane({laneId, noteId});
  }
  editNote(laneId, noteId, task) {
    NoteActions.update({id: noteId, task});
  }
  deleteNote(laneId, noteId) {
    NoteActions.delete(noteId);
    LaneActions.detachFromLane({laneId, noteId});
  }
  editName(id, name) {
    if(name) {
      LaneActions.update({id, name});
    }
    else {
      LaneActions.delete(id);
    }
  }
}
