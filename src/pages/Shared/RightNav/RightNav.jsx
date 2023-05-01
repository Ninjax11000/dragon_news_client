import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button variant="outline-primary" className='mb-2'> <FaGoogle /> Log in with Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Log in with Github</Button>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> facebook </ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> twitter </ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                    
                </ListGroup>
                <Qzone></Qzone>
                <div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;