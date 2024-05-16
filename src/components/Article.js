import MinutesToRead from "./MinutesToRead.js"

function Article( {title, date="January 1, 1970", preview, minutes} ) {
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} 
                <MinutesToRead minutes={minutes}/> 
                {minutes} min read
            </small>
            <p>{preview}</p>
        </article>
    );
};

export default Article;