import "./index.scss"

const Cards = (props) =>{
    return(
        <div className="card">
            <div className="card-left">
                <h1 className="card-word">{props.word}</h1>
            </div>
            <div className="card-right">
                <h5 className="green-brick-count">{props.gcount}</h5>
                <p className="green-brick-name">Green Brick</p>
                <h5 className="red-brick-count">{props.rcount}</h5>
                <p className="red-brick-name">Red Brick</p>
            </div>
        </div>
    )
}

export default Cards;