import React, { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IButtonToAddList } from "./Interfaces";

const AddForm: React.FC<IButtonToAddList> = ({ addNewList }) => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (/^\s+|\s+$/g.test(inputValue) || inputValue === "") return;
    addNewList({
      value: inputValue,
      id: inputValue.toLowerCase().split(" ").join("-"),
      switched: "",
      icon: faList,
    });
    setInputValue("");
  };
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    console.log("setInputValue");
    setInputValue(event.target.value);
  };
  return (
    <form id={"form-add-list"} onSubmit={submitHandler}>
      <FontAwesomeIcon icon={faPlus} />
      <input
        name="nameList"
        type="text"
        placeholder="Создать список"
        autoComplete="off"
        maxLength={14}
        value={inputValue}
        onChange={changeHandler}
      />
    </form>
  );
};

export default AddForm;
