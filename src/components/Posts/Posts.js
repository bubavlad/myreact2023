import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect( () => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost = (post) => {
        setPostDetails(post);
    }
    return (
        <div>
            {posts.map(posts => <Post key={posts.id} post={posts} getCurrentPost={getCurrentPost}/>)}
            <hr/>
            {postDetails != null && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};