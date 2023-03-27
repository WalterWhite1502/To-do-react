import React, {useState} from 'react'

const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function TodoForm() {

    const [value, setValue] = useState('')
    const Submit = e => {
        //e.preventDefault()
        //createItem(value)
        if((value.trim()) == '' ){
            alert("Enter correct task")
        }
        else{
            createItem(value)
        }
    }
    function createItem(item){
        itemsArray.push(item)
        localStorage.setItem('items', JSON.stringify(itemsArray))
    }
    const clearEvent = () => {
        localStorage.clear()
        window.location.reload()        
    }
        return (
            <div className='content'>
                <form className="TodoForm" onSubmit={Submit}>
                    <input className='input' autoFocus value={value} onChange={(e)=>(setValue(e.target.value))}  placeholder='Enter the task...'></input>
                    <button className='btn'>Add Task</button>
            
                </form>                    
                <div className='list'>
                    {itemsArray.map((itemsArrays) => (
                    <div className='listItem'>{itemsArrays}
                        <i class="fa-solid fa-check deleteBtn"></i> 
                    </div>
                    ))} 

                </div>
                <button onClick={clearEvent} className='Clear'>Clear All</button> 
            </div>               

        )
}

export default TodoForm