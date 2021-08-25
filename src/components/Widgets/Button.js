export default function(props){
    return(
        <div className={`btn ${props.extraClass != null ? props.extraClass : ''}`}>
            <a href={props.link}>
                {props.title}
            </a>
        </div>
    )
}