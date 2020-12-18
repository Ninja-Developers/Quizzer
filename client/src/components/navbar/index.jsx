import React from 'react';
import {useHistory} from 'react-router-dom';

const Navbar = () => {
    let route = useHistory();
    
    const jump = path => {
        route.push(path);
    }

    return (
        <div>
            <nav className="split-nav">
                <div className="nav-brand">
                    <h3 style={{cursor: 'pointer'}} onClick={() => {jump('/')}}>Quizzer</h3>
                </div>
                <div className="collapsible">
                    <input id="collapsible1" type="checkbox" name="collapsible1" />
                    <label for="collapsible1">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </label>
                    <div class="collapsible-body">
                        <ul class="inline">
                            <li>
                                <button className="btn-small" onClick={() => {jump('/login')}}>Login</button>
                            </li>
                            <li>
                                <button className="btn-small" onClick={() => {jump('/signup')}}>Signup</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;