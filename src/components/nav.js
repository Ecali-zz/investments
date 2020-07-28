import React from 'react';

const Nav = () =>{
    return(
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>
          </ul>
        </nav>
    );
}

export default Nav;