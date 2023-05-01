import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad consequatur saepe exercitationem voluptatibus alias consequuntur adipisci eaque? Et, similique nisi! Eius velit hic culpa fuga magnam corrupti modi odit possimus, ullam quibusdam veniam quos commodi animi optio facere et suscipit! Id impedit, tempora rem explicabo consequatur nesciunt recusandae odio?</p>

            <p>Go back to <Link to='/register'> register</Link></p>
        </div>
    );
};

export default Terms;