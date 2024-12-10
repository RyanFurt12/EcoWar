export default function PostCard({ post, challengeId }){
    return (
      <a href={`/desafio/${challengeId}/post/${post.id}`} className={"postCard"}>
        <img src={post.imageUrl || 'https://picsum.photos/80/400'} alt={post.title} />
        <div className="postInfo">
          <h4>{post.title}</h4>
          <div className="postUser">
            <img src={post.user?.profilePicture || "https://picsum.photos/80/300"} alt="User" />
            <p>{post.user?.name || 'Nome do usuário'}</p>
          </div>
        </div>
      </a>
    );
  }
  