import './index.scss'

const InfoModal = ({ setIsOpen }) => {
    return(
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">How to Play</h5>
                    </div>
                    <div className="modalContent">
                        <p>The goal is to guess the word within 7 tries.</p>
                        <hr></hr>
                        <p>The word is always;</p>
                        <ul>
                            <li>A dictionary word</li>
                            <li>A 4 letter word with unique letters</li>
                        </ul>
                        <hr></hr>
                        <p className="final-para"> Assume the word is <span className="ogWord">TASK</span> then:</p><br/>
                        <span className="myWord">BARN</span><span className="greenBrick">1</span><span className="redBrick">0</span><br/>
                        <span className="greenHiglight">Green Brick</span> indicates that one of the letters (here <span className="greenHiglight">A</span>) is <span className="greenHiglight">present</span> in the word and is at the <span className="greenHiglight">correct</span> position.<br/>
                        <p className="red-brick-para"><span className="myWord">SOIL</span><span className="greenBrick">0</span><span className="redBrick">1</span><br/>
                        <span className="redHiglight">Red Brick</span> indicates that one of the letters (here <span className="redHiglight">S</span>) is <span className="redHiglight">present</span> in the word but is at the <span className="redHiglight">incorrect</span> position.<br/></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoModal;