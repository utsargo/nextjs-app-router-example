import Container from "@/app/container";
import { format } from "date-fns/format";
import { TArticle } from "../type";

const SingleBlog = async ({ params }: { params: { id: string } }) => {
    console.log(params);
    const { id } = params;

    const article: TArticle = await fetch(
        `${process.env.JSON_API_URL}/articles/${id}`,
    ).then((res) => res.json());
    console.log(article);
    return (
        <Container>
            <div className="featured_image_container">
                {/* eslint-disable-next-line @next/next/no-img-eliment */}
                <img
                    src={article.image}
                    alt={article.title}
                    className="featured_image"
                />
            </div>
            <div className="content_single">
                <div className="single_date_categoy">
                    <span className="date">
                        {format(new Date(article.createdAt), "MMMM dd, yyyy")}
                    </span>
                    <span className="category">{article.category}</span>
                </div>
                <h3 className="title">{article.title}</h3>
                <p className="content">{article.content}</p>
            </div>
        </Container>
    );
};

export default SingleBlog;
