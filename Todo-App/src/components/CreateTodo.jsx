

export function CreateTodo(){
    return <div style={{display:"flex",flexDirection:"column",width:"250px", gap:"20px", alignItems:"center"}}>
        <input type="text" placeholder="title" style={{padding:"10px",borderRadius:"10px"}}/>
        <input type="text" placeholder="description" style={{padding:"10px",borderRadius:"10px"}}/>
        <button onClick={add} style={{padding:"10px",borderRadius:"10px", width:"100px"}}>Add a Todo</button>
    </div>
}

function add (){
    
}
