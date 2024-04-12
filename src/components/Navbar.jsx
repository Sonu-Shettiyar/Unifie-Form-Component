import React from 'react'
import { Button } from 'antd';

const Navbar = ({ printPage }) => {
    return (
        <div id='navbar'>

            <Button onClick={printPage}>Print</Button>
            <Button>Reset</Button>

        </div>
    )
}

export default Navbar