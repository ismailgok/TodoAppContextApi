import React from "react";

const List = ({ data, onClickDarkMode, dark }) => {
    return (
        <div className="container">
            <div className="flex flex-row items-center">
                <h1
                    className={`${
                        dark
                            ? "text-white border-sky-400"
                            : "text-sky-900 border-sky-700"
                    } text-2xl w-12 border-b-4 my-3`}
                >
                    List
                </h1>
                
                <button
                    onClick={onClickDarkMode}
                    className="ml-36 bg-sky-800 hover:bg-sky-900 h-7 px-1 items-center justify-center px-py text-sm text-white rounded-md"
                >
                    Dark Mode
                </button>
            </div>
            <div>
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="px-2 rounded-sm w-1/2 cursor-pointer my-2 bg-sky-600 hover:bg-sky-700 p-1 list-none text-white font-medium"
                    >
                        {item.name} {item.surname}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default List;
