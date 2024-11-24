import './button.css'
import Program from '../program/Program'

export default function Button() {
    const throwAgain = function() {
        <Program />
    }
    return (
        <button id="btn" onClick={throwAgain}>
            Бросить еще раз
        </button>
    )
}