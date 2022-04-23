import React from "react";

const Form = ({ form, onSubmitForm, onChangeInput, dark }) => {
    return (
        <div
            className={`container my-1 ${
                dark ? "bg-slate-800" : "bg-slate-400"
            }`}
        >
            <input
                className="border mr-1 px-1 rounded-sm"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={onChangeInput}
            />
            <input
                className="border mr-1 px-1 rounded-sm"
                placeholder="Surname"
                name="surname"
                value={form.surname}
                onChange={onChangeInput}
            />
            <button
                className="bg-white hover:bg-zinc-300 w-20 p-px"
                onClick={onSubmitForm}
            >
                Add
            </button>
        </div>
    );
};

export default Form;
