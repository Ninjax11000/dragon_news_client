import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const [accept,setAccept]=useState(false);
    const handleAccept =(event)=>{
        setAccept(event.target.checked);
    }

    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password=form.password.value;

        console.log(name,email, photo, password);
        createUser(email,password)
        .then(result=>{
                const createdUser=result.user;
                console.log(createdUser);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <Container className='mx-auto w-25'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photoUrl" required />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccept}
                    type="checkbox" 
                    name='accept' 
                    label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>
                
                <Button variant="primary" disabled={!accept} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                       <Link to='/login'>Already have an account?</Link>
                    </Form.Text>
                <Form.Text className="text-success">
                       
                    </Form.Text>
                <Form.Text className="text-danger">
                       
                    </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;