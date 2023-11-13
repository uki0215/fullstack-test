import DeletePostButton from "./DeletePostButton";

export default function Post ({id, title, content, authorName}) {
    return (
        <>
        <div style={{border: '1px solid white', padding: '15px', margin: '10px 0px'}}>
            <p>{authorName}</p>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
        <DeletePostButton postId={id} />
        </>
    )
}