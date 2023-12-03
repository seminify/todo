import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';

const AddTodo = (props) => {
  const [item, setItem] = useState({ title: '' });
  const addItem = props.addItem;
  const onInputChange = (e) => {
    setItem({ title: e.target.value });
    console.log(item);
  };
  const onButtonClick = () => {
    addItem(item);
    setItem({ title: '' });
  };
  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };
  return (
    <Grid
      container
      style={{ marginTop: 20 }}
    >
      <Grid
        item
        xs={11}
        md={11}
        style={{
          paddingRight: 16,
        }}
      >
        <TextField
          value={item.title}
          placeholder='Add Todo here'
          fullWidth
          onChange={onInputChange}
          onKeyDown={enterKeyEventHandler}
        />
      </Grid>
      <Grid
        item
        xs={1}
        md={1}
      >
        <Button
          variant='outlined'
          color='secondary'
          style={{ height: '100%' }}
          fullWidth
          onClick={onButtonClick}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
