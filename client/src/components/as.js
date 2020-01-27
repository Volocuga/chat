import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
  addNewItem,
  loadInitialData,
  markItemComplete,
  loadInitialDataSocket,
  addNewItemSocket,
  markItemCompleteSocket,
  AddItem,
  completeItem,
} from '../actions/action';
import io from 'socket.io-client';


let socket;

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    socket = io.connect('http://localhost:3000');
    dispatch(loadInitialDataSocket(socket));

    socket.on('itemAdded', res => {
      dispatch(AddItem(res));
    });

    socket.on('itemMarked', res => {
      dispatch(completeItem(res));
    });
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  render() {
    const { dispatch, items } = this.props;

    return (
      <div>
        <h1 style={robotFontStyle}>React TO-DO (Real-Time)</h1>
        <Divider />
        <TextField
          hintText="Add New Item"
          floatingLabelText="Enter the new item"
          ref="newTodo"
        />{' '}
        <RaisedButton
          label="Click to add!"
          primary={true}
          onTouchTap={() => {
            const newItem = ReactDOM.findDOMNode(this.refs.newTodo.input).value;
            newItem === ''
              ? alert("Item shouldn't be blank")
              : dispatch(addNewItemSocket(socket, items.size, newItem));
            {
              /*: dispatch(addNewItem(items.size,newItem))*/
            }
            ReactDOM.findDOMNode(this.refs.newTodo.input).value = '';
          }}
        />
        <List>
          {items.map((todo, key) => {
            return (
              <ListItem
                key={key}
                style={todo.completed ? markCompleteStyle : {}}
                onClick={event => {
                  {
                    /*dispatch(markItemComplete(key+1,!todo.completed))*/
                  }
                  dispatch(
                    markItemCompleteSocket(socket, key + 1, !todo.completed),
                  );
                }}
                primaryText={todo.item}
              />
            );
          })}
        </List>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout);
