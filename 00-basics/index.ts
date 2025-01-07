import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  console.log(`
    The Todo with ID: ${id}
    Has title of: ${title}
    and it is ${finished}ly completed
    `);
});
