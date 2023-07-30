import Todo from './Todo'
let Todos=({tasks,deletetask })=>{
    return<div className='todos'>
        {tasks.map((task)=>(
            <Todo key={task.id} 
            task={task}
            deletetask={deletetask}/>
            ))}
    </div>
}
export default Todos;