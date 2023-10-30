function ToDo({toDo, index, remove}) {
    function handle() {
        remove(index);
    }
    
    return(
        <div className="todo" onClick={handle}>
            <span>{toDo.text}</span>
            <span>(-)</span>
        </div>
        
    )
}