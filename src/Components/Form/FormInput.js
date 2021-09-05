import './style.scss'

const FormInput = ({ id, label, value, handleChange, name, type = "text" }) => {
    return (
        <div className="formInput">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                id={id}
                name={name}
            />
        </div>
    )
}

export default FormInput