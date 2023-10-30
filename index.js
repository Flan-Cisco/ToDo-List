function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addToDo = text=> {
    
    const newToDos = [...todos, { text: text, isCompleted: false}];
    setTodos(newToDos)
  }
  
  const removeToDo = index => {
    let tmp = [...todos];
    tmp.splice(index,1);
    setTodos(tmp);
  }

  return (<div className='todo-list'>
      {todos.map((todo, i) =>
        <ToDo key={i} index={i} remove={removeToDo} toDo={todo} />
      )}
      <ToDoForm addToDo={addToDo}/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
