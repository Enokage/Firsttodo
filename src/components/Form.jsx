import React,{useState}from 'react';

let Form=({todo})=>{
    const[title, seTitle]=useState('')
    const[text, setText]=useState('')
    const[day, setDay]=useState("Monday")

    let onsubmit=(e)=>{
        e.preventDefault()

        todo({title,text,day})
        seTitle('')
        setText('')
        setDay('')

    }
    return<form onSubmit={onsubmit}>
        <div className='k'>
            <label className='title-label'>Title</label>
            <input  className='title' value={title} 
            onChange={(e)=>seTitle(e.target.value)} required/>
        </div>
        <div className='l'>
            <label>Content</label>
            <input className='text-input' value={text} onChange={(e)=>setText(e.target.value)} required/>
        </div>
        <div className='m'>
            <label className='day-label'>Day</label >
            <select onChange={(e)=>{setDay(e.target.value)}} value={day}>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednessday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
            </select>
        </div>
        <input className='submit'
        value={'   Add   '}
         type={'submit'} />

    </form>
}
export default Form;
