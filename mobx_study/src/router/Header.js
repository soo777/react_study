import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/aladin">Aladin</Link>
                </li>
                <li>
                    <Link to="/lionking">Lion King</Link>
                </li>
                <li>
                    <Link to="/spiderman">SpiderMan</Link>
                </li>
            </ul>
        </div>
    )
}
    
export default Header;