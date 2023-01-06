import { React } from "react-router-dom";
import { LoginContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

export default function Register() {
    const navigate = useNavigate();

    function goToSignUp() {
        navigate("/sign-up");
    }

    return (
        <LoginContainer>
            <Form />
            <p onClick={goToSignUp}>First time? Create an account!</p>
        </LoginContainer>
    );
}