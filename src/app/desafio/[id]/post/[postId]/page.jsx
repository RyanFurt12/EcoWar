import './post.css'
import PostContainer from './postContainer';

export default async function PostPage({ params }) {
  const { id, postId } = await params;

  return (
    <PostContainer id={id} postId={postId}/>
  );
}
