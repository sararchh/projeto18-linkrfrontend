import { React } from "react-router-dom";
import { RegisterContainer } from "./styles";
import Form from "./Form"
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    function goToSignIn() {
        navigate("/");
    }

    return (
        <RegisterContainer>
            <Form />
            <p onClick={goToSignIn}>Switch back to log in</p>
        </RegisterContainer>
    );
}

