import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async () =>{
            const res = await axios.get("post/timeline/65fc75d00681bc06bb57b505");
            //console.log(res)
            setPosts(res.data);
        };
        fetchPosts();
    },[])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {
                    posts.map((p) => (
                        <Post key={p._id} post={p}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Feed;