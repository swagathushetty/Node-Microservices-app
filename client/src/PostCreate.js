import {useState} from 'react'

const PostCreate=()=>{
    const [title,setTitle]=useState('')
    const onSubmit=()=>{
        
    }
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input onChange={e=>setTitle(e.target.value)} className="form-control"/>
            </div>
            <button className="btn btn primary">Submit</button>
        </form>
    </div>
}


export default PostCreate