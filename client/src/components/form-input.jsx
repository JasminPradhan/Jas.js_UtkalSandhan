
const FormInput = ({ label, inputType,error,hidenseek,...otherProps }) => {

    return (

        <div className="form-input">
                <label className={`form-label`}>{label}</label>
                <div className="input">
                    <input
                    className={`input-field ${inputType} text-center email rounded-full outline outline-gray-300 outline-1 h-[48px] w-[300px]`}
                    {...otherProps}
                    />
                    {hidenseek}
                </div>
                <p>{error}</p>
        </div>
    )
};

export default FormInput;