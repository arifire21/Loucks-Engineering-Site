export default function ContactBody() {
    return(
        <div>
            <h4>Main Phone</h4>
            <br/>
            <h4>Email?</h4>
            <br/>
            <h4>Op Hours?</h4>
            <br/>
            {/* todo, maybe put this in a flexbox */}
            <h4>Location</h4>
            <div className="contact-address">
                <a href="https://goo.gl/maps/vfK9qLgASjXJTs7r5" target="_blank">Get Directions</a>
            </div>
        </div>
    )
}