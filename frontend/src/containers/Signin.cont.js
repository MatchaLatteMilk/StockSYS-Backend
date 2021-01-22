import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/signin.css";
// import { useAppContext } from "../libs/contextLib";
import { Asignin } from "../actions/signin.action"

export default function Signin() {
    // const { userHasAuthenticated } = useAppContext();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function popup(signin) {
        if(signin.status === 201) {
            return(
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>LOGGED IN!</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        } else {
            return (
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>ERROR</strong> username or password combination is incorrect.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            Asignin({ 
                username,
                password
            })

            // console.log('signin',signin)
            // popup(signin)
            // userHasAuthenticated(true);
        } catch (error) {
            alert(error);
        }

    }

    return (
    <div className="Login">
        <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
            <Form.Label>Username</Form.Label>
            <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
        </Button>
        </Form>
    </div>
    );
    }
