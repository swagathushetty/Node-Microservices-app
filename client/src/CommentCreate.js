import React,{useState} from "react";

const CommentCreate=({postId})=>{
    const [content,setContent]=useState('')
    return <div>
        <form>
            <div className="form-group">
             <label>New comment</label>    
             <input value={content} onChange={(e)=>setContent(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default CommentCreate