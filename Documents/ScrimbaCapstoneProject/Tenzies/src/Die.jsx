export default function Die(props) {
    const isHeld = props.diceObj.isHeld ? "#59E319" : "red"
    return (
        <button style={{backgroundColor: isHeld}}>{props.diceObj.value}</button>
    )
}