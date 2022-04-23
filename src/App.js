import Form from "./components/Form";
import { useState, useEffect } from "react";
import List from "./components/List";

function App() {
    const [form, setForm] = useState({ name: "", surname: "" });
    const [data, setData] = useState([
        { name: "Ferhat", surname: "Macak" },
        { name: "Yasef", surname: "Ertekin" },
        { name: "İsmail", surname: "Gök" },
    ]);
    const [dark, setDarkMode] = useState(false);
    const onChangeInput = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        setForm({ name: "", surname: "" });
    }, [data]);
    const onSubmitForm = () => {
        if (form.name === "" && form.surname === "") {
            return false;
        } else {
            setData([form, ...data]);
          
        }
        
    };

    const onClickDarkMode = (e) => {
        e.preventDefault();

        setDarkMode((previtem) => !previtem);
    };
    return (
        <div
            className={`${
                dark ? "bg-slate-800" : "bg-slate-400"
            } container-full h-screen px-5 py-5 bg-slate-400`}
        >
            <Form
                form={form}
                onChangeInput={onChangeInput}
                onSubmitForm={onSubmitForm}
                dark={dark}
            />
            <List data={data} onClickDarkMode={onClickDarkMode} dark={dark} />
        </div>
    );
}

export default App;
