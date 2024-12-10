'use client'

import { useEffect, useState } from "react";
import ReturnSvg from "@/components/svg/ReturnSvg";

export default function PostContainer({ id, postId }){
    const [post, setPost] = useState(null);

    useEffect(() => {
      fetchPost(postId).then((res) => setPost(res))
    }, []); 

    return(
        <div className='post-container'>
        <div className="header">
          <a href={"/desafio/"+id}><ReturnSvg/></a>
          <h1>{post?.challenge?.name || "Carregando..."}</h1>
        </div>
        <div className="post-content">
          <img src={post?.photo || "https://picsum.photos/300/200"} alt="" />
          <div className="post-user">
            <img src={ post? post?.user?.profilePicture : "https://picsum.photos/80"} alt="" />
            <div className="user-data">
              <h3>{post?.user?.name || "Carregando..." }</h3>
              <p>{post ? new Date(post.createdAt).toDateString() : ''}</p>
            </div>
          </div>
          <h2>{post?.title || "Carregando..."}</h2>
          <p>{post?.description}</p>
        </div>
      </div>
    );
};

async function fetchPost(id) {
    try {
      const response = await fetch('/api/post?id=' + id, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json', 
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
  
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
  
    } catch (error) {
      console.error('Erro ao buscar os desafios:', error);
    }
  }