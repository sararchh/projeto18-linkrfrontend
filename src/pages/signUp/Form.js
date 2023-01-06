import { useState } from "react"
import { RegisterForm } from "./styles"
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [form, setForm] = useState({ email: "", password: "", username: "", pictureUrl: "" });
    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    async function sendRegister(e) {
        e.preventDefault()
        setIsDisabled(true)

        const newForm = {
            email: form.email,
            password: form.password,
            username: form.username,
            pictureUrl: form.pictureUrl
        }

        const body = { ...newForm };

        // await api.post(`/sign-up`, body)
        //     .then(res => {
        //         navigate("/");
        //         setIsDisabled(false);
        //     })
        //     .catch(err => {
        //         alert(err.response.data)
        //         setIsDisabled(false)
        //     })
 
            try {
                const users = await api.post(`/sign-up`, body);
                console.log(users?.data);
  
            } catch (error) {
                console.log(error);
            }
        
    }

    return (
        <RegisterForm onSubmit={sendRegister}>
            <input name="email" value={form.email} onChange={handleForm} placeholder="e-mail" type="text" disabled={isDisabled} required />
            <input name="password" value={form.password} onChange={handleForm} placeholder="password" type="password" disabled={isDisabled} required />
            <input name="username" value={form.username} onChange={handleForm} placeholder="username" type="text" disabled={isDisabled} required />
            <input name="pictureUrl" value={form.pictureUrl} onChange={handleForm} placeholder="picture url" type="text" disabled={isDisabled} required />
            <button type="submit">Sign Up</button>
        </RegisterForm>
    );
};