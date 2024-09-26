import "../_3_cards/cards.css"
import Card from "./card/Card";


export default function Cards() {
    const dataCrad = [
        {
            id: 1,
            title: "santorini beach",
            url: "https://i1.pickpik.com/photos/222/725/141/reflection-mountains-lake-snow-mountains-17b732c43f0632e145b870c965eaec3b.jpg"
        },
        {
            id: 2,
            title: "santorini beach",
            url: "https://www.northlandscapes.com/files/images/portfolio/northlandscapes-1801-faroe-islands-mountains-and-sea-03.jpg"
        },
        {
            id: 3,
            title: "santorini beach",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ih3iGSTNuDtbzz2EfkkLJ2WgmrxTBJF7-g&s"
        },
        {
            id: 4,
            title: "santorini beach",
            url: "https://i1.pickpik.com/photos/222/725/141/reflection-mountains-lake-snow-mountains-17b732c43f0632e145b870c965eaec3b.jpg"
        },
        {
            id: 5,
            title: "santorini beach",
            url: "https://www.northlandscapes.com/files/images/portfolio/northlandscapes-1801-faroe-islands-mountains-and-sea-03.jpg"
        },
        {
            id: 6,
            title: "santorini beach",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ih3iGSTNuDtbzz2EfkkLJ2WgmrxTBJF7-g&s"
        },
    ]
    return (
        <>
            <h2 className="header-cards">the destination</h2>
            <div className="box-cards">
                {dataCrad.map(item => (
                    <Card key={item.id} title={item.title} img={item.url} />
                ))}
            </div>
        </>
    )
}
