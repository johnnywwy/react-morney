import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import x from 'icons/money.svg';

console.log(x);

const NavWrapper = styled.nav`
  //border: 2px solid black;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.33%;
      text-align: center;
      padding: 16px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <img src={x} alt=""/>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;