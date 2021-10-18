import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const Login = () => {
    const [isLogin,setIsLogin] = useState(false)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const handleToggle = e => {
        setIsLogin(e.target.checked)
    }
    console.log(isLogin)
    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center p-5">
                
                <div className="border rounded p-2 meditab shadow">
                <div className="" style={{width:'20rem'}}>
                    <h2>Please {!isLogin?'Register': 'Login'}</h2>
                    <Form  onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email"  {...register("email")} required/>
                            <Form.Text className="text-muted">
                            {!isLogin?"We'll never share your email with anyone else.":'mail@example.com'}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  {...register("password")}  required/>
                        </Form.Group>

                        <Form.Group className="">
                            <Form.Check onChange={handleToggle} type="checkbox" label={isLogin?'Create an account':'Already Registered?'} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='w-100 fw-bold'>
                            {isLogin?'Log in':'Register'}
                        </Button>
                    </Form>             
                </div>
                <div className="d-flex justify-content-center">
                    <div className="">
                        <p className="text-danger text-center m-0 p-0">Sign in with</p>
                        <div className="">
                            <button type="button" className="m-2 btn btn-outline-success rounded-pill"><i className="m-2 fab fa-google"></i></button>
                            <button type="button" className="m-2 btn btn-outline-dark rounded-pill"><i className="m-2 fab fa-github"></i></button>
                        </div>
                    </div>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;