

export function Todos({todos}){
    
    return <div>
        {todos.map((todo) => {
            return <div>
                <b>{todo.title}</b>
                <h3>{todo.description}</h3>
                <button>{todo.completed == true ? " Completed": "Mark as Complete"}</button>
            </div>
        })}
    </div>
}