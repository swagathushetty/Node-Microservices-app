import { useState,useEffect } from "react"
import axios from "axios"
import CommentCreate from "./CommentCreate"
import CommentList from "./CommentList"
const PostList=()=>{
    const [posts,setPosts]=useState({})

    const fetchPosts=async()=>{
        const res=await axios.get('http://posts.com/posts')
        setPosts(res.data)
    }

    useEffect(()=>{
        fetchPosts()
    },[])

    const renderedPosts=Object.values(posts).map((post)=>{
        return <div className="card" style={{width:'30%',marginBottom:'20px'}} key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentCreate postId={post.id} />
                <CommentList comments={post.comments} />
            </div>
        
        </div>
    })
    return (
        <div>
            {renderedPosts}
        </div>
    )
}

export default PostList