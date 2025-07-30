import { DeleteOutlined } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputBase,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};
export const TodoComponent = (props: {
  todo: Todo;
  editTodos: (todo: Todo) => void;
  deleteTodos: (todo: Todo) => void;
}) => {
  const { todo, editTodos, deleteTodos } = props;
  const editTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    todo.title = e.target.value;
    editTodos(todo);
  };
  const editTodoCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    todo.done = e.target.checked;
    editTodos(todo);
  };
  const deleteTodo = () => deleteTodos(todo);
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={deleteTodo}>
          <DeleteOutlined />
        </IconButton>
      }
    >
      <Checkbox
        id={String(todo.id)}
        onChange={editTodoCheck}
        name="done"
        defaultChecked={todo.done}
      />
      <ListItemText>
        <InputBase
          id={String(todo.id)}
          onChange={editTodoTitle}
          name="title"
          defaultValue={todo.title}
          multiline
          fullWidth
        />
      </ListItemText>
    </ListItem>
  );
};
export const AddTodo = ({
  addTodo,
}: {
  addTodo: (formData: FormData) => void;
}) => {
  return (
    <Grid container component={"form"} action={addTodo}>
      <Grid>
        <TextField
          name="title"
          placeholder="add todo here"
          fullWidth
        ></TextField>
      </Grid>
      <Grid>
        <Button type="submit" fullWidth color="secondary">
          +
        </Button>
      </Grid>
    </Grid>
  );
};
