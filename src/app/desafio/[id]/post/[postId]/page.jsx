import './post.css'
import ReturnSvg from "@/components/svg/ReturnSvg";

export const metadata = {
  title: "Post - id",
  description: "Página para a visualizar um Post",
};

export default async function Home({ params }) {
  const { id, postId } = await params;

  return (
    <div className='post-container'>
      <div className="header">
        <a href={"/desafio/"+id}><ReturnSvg/></a>
        <h1>Challenge Name</h1>
      </div>
      <div className="post-content">
        <img src="https://picsum.photos/300/120" alt="" />
        <div className="post-user">
          <img src="https://picsum.photos/80" alt="" />
          <div className="user-data">
            <h3>Nome usuario</h3>
            <p>09/12/2024</p>
          </div>
        </div>
        <h2>Titulo do post</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni excepturi, magnam atque quos ab beatae fugiat molestias veritatis suscipit, maiores ut voluptatibus similique repellat eligendi natus. Pariatur cupiditate labore provident?</p>
      </div>
    </div>
  );
}
