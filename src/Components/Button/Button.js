import './style.scss'


const Button = ({ type = "button", color, text, onClick }) => {
    return (
        <button
            type={type}
            className={`btn__${color}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button