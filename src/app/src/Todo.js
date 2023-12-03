import { DeleteOutline } from '@mui/icons-material';
import {
  Checkbox,
  IconButton,
  InputBase,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

const Todo = (props) => {
  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const editItem = props.editItem;
  const deleteItem = props.deleteItem;
  const turnOffReadOnly = () => {
    setReadOnly(false);
  };
  const turnOnReadOnly = (e) => {
    if (e.key === 'Enter' && readOnly === false) {
      setReadOnly(true);
      editItem(item);
    }
  };
  const editEventHandler = (e) => {
    setItem({ ...item, title: e.target.value });
  };
  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem(item);
  };
  const deleteEventHandler = () => {
    deleteItem(item);
  };
  return (
    <ListItem>
      <Checkbox
        checked={item.done}
        onChange={checkboxEventHandler}
      />
      <ListItemText>
        <InputBase
          value={item.title}
          type='text'
          id={item.id}
          name={item.id}
          multiline={true}
          fullWidth={true}
          inputProps={{
            'aria-label': 'naked',
            readOnly,
          }}
          onClick={turnOffReadOnly}
          onKeyDown={turnOnReadOnly}
          onChange={editEventHandler}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          aria-label='Delete Todo'
          onClick={deleteEventHandler}
        >
          <DeleteOutline />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
