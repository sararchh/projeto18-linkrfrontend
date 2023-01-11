import { useEffect, useState } from "react"
import { LoginForm } from "./styles"
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            navigate("/timeline");
        }
        // eslint-disable-next-line
    }, []);

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    async function sendLogin(e) {
        e.preventDefault()
        setIsDisabled(true)

        const newForm = {
            email: form.email,
            password: form.password,
        }

        const body = { ...newForm };

        await api.post(`/sign-in`, body)
            .then(res => {
                setIsDisabled(false)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("picture", res.data.user)
                navigate("/timeline")
            })
            .catch(err => {
                alert(err.response.data)
                setIsDisabled(false)
            })
    }

    return (
        <LoginForm onSubmit={sendLogin}>
            <input name="email" value={form.email} onChange={handleForm} placeholder="e-mail" type="text" disabled={isDisabled} required />
            <input name="password" value={form.password} onChange={handleForm} placeholder="password" type="password" disabled={isDisabled} required />
            <button type="submit" disabled={isDisabled}>Sign In</button>
        </LoginForm>
    );
};