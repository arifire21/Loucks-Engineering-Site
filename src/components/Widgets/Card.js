export default function(props) {
    return (
        <div className="card">
            <div className="card__icon">
                {props.icon}
            </div>
            <div className="card__header">
               <h3>{props.title}</h3> 
            </div>
            <div className="card__body">
                {props.body}
            </div>
        </div>
    )
}