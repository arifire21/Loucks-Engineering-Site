export default function (props) {
    return (
        <div className={`headline ${props.extraClass != null ? props.extraClass : ''}`}>
            <h2>{props.title}</h2>
        </div>
    )
}