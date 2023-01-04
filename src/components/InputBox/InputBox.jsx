import "./InputBox.scss";

const InputBox = ({handleInputValue, inputValue, addToDo}) => {


    return (
        <div className="inputbox">
            <input 
            className="inputbox__value"
                type="text" 
                placeholder="Add To Do.."
                onInput={handleInputValue}
                value={inputValue} 
                />
            <p 
                onClick={addToDo}
                className="inputbox__button"
                >+</p>
        </div>
    )
}

export default InputBox