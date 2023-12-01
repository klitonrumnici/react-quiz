export default function FinishScreen({points, maxPoints, highscore, dispatch}) {
    const percentage = (points / maxPoints) * 100;
    return (
        <>
            <p className="result">You scored {points} points out of {maxPoints} {Math.ceil(percentage)}%</p>
            <p className="highscore">Highscore: {highscore} </p>
            <button className="btn btn-ui" onClick={()=> dispatch({type: "reset"})}>Restart Quiz</button>
        </>

    )
}
