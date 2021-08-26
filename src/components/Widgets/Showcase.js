import Button from '../Widgets/Button';

export default function (props) {
    return (
        <div className="showcase">
            <div className="showcase__photo">
                <img src={props.image} width="100%" />
            </div>
            <div className="showcase__inner">
            <div className="showcase__body">
                <strong>{props.body}</strong>
            </div>
            <div className="showcase__cta">
                <Button
                    title="View Showcase"
                    link={props.link}
                    extraClass="btn__red"
                />
            </div>
            </div>
        </div>
    )
}