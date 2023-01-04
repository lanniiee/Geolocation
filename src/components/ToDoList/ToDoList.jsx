import { useEffect, useState } from "react";
import InputBox from "../InputBox/InputBox";
import "./ToDoList.scss";

const ToDoList = () => {

    const [inputValue, setInputValue] = useState("");
    const [toDoArr, setToDoArr] = useState([]);

    const handleInputValue = (e) => {
        setInputValue(e.currentTarget.value)
    }

    const addToDo = (text) => {
        if (inputValue !== "") {
            text = inputValue;
            const newToDos = [...toDoArr, text];
            setToDoArr(newToDos);
        }
    }

    const removeToDo = (index) => {
        const newToDos = [...toDoArr];
        newToDos.splice(index, 1);
        setToDoArr(newToDos)
    }

    const showToDoListArr = toDoArr.map((toDo, index) => {
        return (
            <div className="toDoList-container__lists--list" key={index} >            
                <li className="toDoList-container__lists--text" >{toDo}</li>
                <button className="toDoList-container__lists--remove" onClick={() => removeToDo(index)}>x</button>
            </div>

        )
    })


    return (
        <div className="toDoList">
            <InputBox handleInputValue={handleInputValue} inputValue={inputValue} addToDo={addToDo} />
            <div className="toDoList-container">
                <h2 className="toDoList-container__heading">To Do List</h2>
                <ul className="toDoList-container__lists">
                    {showToDoListArr}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;