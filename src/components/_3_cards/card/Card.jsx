import "../card/card.css"

// eslint-disable-next-line react/prop-types
export default function Card({title, img}) {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    )
}
