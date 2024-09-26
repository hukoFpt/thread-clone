import { useEffect, useState } from "react";
import Post, { PostInterface } from "../model/Post";
import Creator from "./Creator";

const ContentWrapper = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await Post.getAll();
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="border border-blue-400 m-1">
      ContentWrapper
      {posts.map((post) => (
        <div className="border border-green-400 m-1" key={post.id}>
          <Creator creatorId={post.userId} />
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentWrapper;
