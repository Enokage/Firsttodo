let Todo=({task, deletetask})=>{
    return <div className="tasks-body">
      <div className="tasks">

          <h3>{task.title}</h3>
          <h4 className="jjk">{task.text} </h4>
          <h4>{task.day} </h4>
        
      </div>

      <div className="delete">
      <input className="button" value={'delete'} type={'button'} onClick={()=> deletetask(task.id)} />
      </div>


    </div>
}
export default Todo;

