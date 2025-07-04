export default function Die(props) {
    const isHeld = props.diceObj.isHeld ? "#59E319" : ""
    return (
        <button onClick={() => props.onClick(props.diceObj.id)} style={{backgroundColor: isHeld}}>{props.diceObj.value}</button>
    )
}