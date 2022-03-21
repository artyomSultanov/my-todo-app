import React, { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IButtonToAddList } from "./Interfaces";

const NavForm: React.FC<IButtonToAddList> = ({ addNewList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
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
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    console.log("setInputValue");
    setInputValue(event.target.value);
  };
  return (
    <form id={"form-add-list"} onSubmit={handleSubmit}>
      <FontAwesomeIcon icon={faPlus} />
      <input
        name="nameList"
        type="text"
        placeholder="Создать список"
        autoComplete="off"
        maxLength={14}
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default NavForm;
