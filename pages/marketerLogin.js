import Form from "../comps/Form";
import LoginForm from "../comps/LoginForm"
import { Modal } from 'antd';
import { useState } from "react";


const Login = () => {

    return (
        <div style={{ padding: "200px", backgroundColor: "#f7f7f7"}}>
            <Modal title="LOGIN" visible={true} footer="">
                <Form />
            </Modal>

        </div>
    )
}
export default Login;