import React, { useState, useEffect } from 'react'

const getLocalItem = ()=> {
    let list = localStorage.getItem('lists')
    // console.log(lists)
    if(list){
        return JSON.parse(list)
    }
    else{
        return[]
    }

}
function Notes() {
    const [text, setText] = useState('add some task')
    const [task, setTask] = useState(getLocalItem())
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submited')
        setTask([...task, text])
        setText('')

    }
    const removeTask = (a) => {
        const finalData = task.filter((curElem, index) => {
            return index !== a;
        })
        setTask(finalData)
    }
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(task))
    }, [task])
    
    return (
        <div className=' container mx-auto bg-blue-200 text-center '>
            <div className=' bg-red-600' >
                <h4>Note Taking App</h4>


            </div>
            <form onSubmit={submitHandler}>
                <div className='p-5'>
                    <div className='my-4'>
                        <input className='p-2 w-96 ' onChange={handleChange} type="text" id='noteApp' value={text} />
                    </div>
                    <button className=' bg-green-400 p-2 ' type='submit'>Add Note</button>
                </div>
            </form>
            <div className="container">
                <div>
                    {
                        task.map((value, index) => {
                            return (
                                <>
                                    <div key={index}  >{value}</div>
                                    <div><button onClick={() => removeTask(index)} >X</button></div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Notes