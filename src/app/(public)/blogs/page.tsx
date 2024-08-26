import Container from "@/app/container";
import { format } from "date-fns/format";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TArticle } from "./type";

const isEmptyObject = (obj: Object) => {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

const Blogs = async () => {
    try {
        const response = await fetch(`${process.env.JSON_API_URL}/articles`);
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return notFound();
        }

        const articles = await response.json();

        if (!articles || articles.length === 0 || isEmptyObject(articles)) {
            return notFound();
        }

        console.log(articles);

        return (
            <Container>
                <h1>Blogs (public)</h1>
                <section className="cards">
                    {articles.map((article: TArticle) => {
                        return (
                            <div className="card" key={article.id}>
                                <div className="card_image_container">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="card_image"
                                    />
                                </div>
                                <div className="card_content">
                                    <div className="card_date_category">
                                        <span className="date">
                                            {format(
                                                new Date(article.createdAt),
                                                "MMMM dd, yyyy",
                                            )}
                                        </span>
                                        <span className="category">
                                            {article.category}
                                        </span>
                                    </div>
                                    <h3 className="title">{article.title}</h3>
                                    <p className="description">
                                        {article.description}
                                    </p>
                                    <Link
                                        href={`/blogs/${article.id}`}
                                        className="post_link"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </Container>
        );
    } catch (error) {
        console.error("Error fetching articles:", error);
        return notFound();
    }
};

export default Blogs;
