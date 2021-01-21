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

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            Asignin({ 
                username,
                password
            })
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
