import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import joey from "./IG_Joey_BW.jpeg";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {/* <Post
        profilePic={joey}
        message="Kimetsu No Yaiba #1 Anime"
        timestamp="Time stamp..."
        username="Duy Truong"
        image="https://i.pinimg.com/originals/fc/bc/63/fcbc6378ee3bb39790dc976869ee1051.jpg"
      />
      <Post
        profilePic={joey}
        message="Akame Ga Kill #2 Anime"
        timestamp="Time stamp..."
        username="Duy Truong"
      /> */}
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
