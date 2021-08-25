export default function(props){
    return(
        <div className={`section ${props.extraClass != null ? props.extraClass : ''}`}>
            {props.children}
        </div>
    )
}