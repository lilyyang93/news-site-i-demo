export default function Article({created_date, author, url}) {
    return (
        <div className="Article">
            <p>published: {created_date}</p>
            <p>author: {author}</p>
            <a href={url}>go to article</a>
        </div>
    )
}