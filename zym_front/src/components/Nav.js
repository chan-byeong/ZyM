import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar ,faUser } from "@fortawesome/free-regular-svg-icons";
import {faHouse,faUserGroup,faGear } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import { BLUE } from '../styles/common';

function Nav() {
  return (
    <Container>
      <Box>
        <Link2 to="/calendar" >
           <FontAwesomeIcon icon={faCalendar} size="2xl" style={{color: "#727479",}}/>
           <div>달력</div>
        </Link2>
        <Link2 to="/group" >
          <FontAwesomeIcon icon={faUserGroup} size="2xl" style={{color: "#727479",}}/>
          <div>그룹</div>
        </Link2>
        <Link3 to="/" >
          <FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#727479",}}/>
          <div>홈</div>
        </Link3>
        <Link2 to="/my" >
         <FontAwesomeIcon icon={faUser} size="2xl" style={{color: "#727479",}}/>
          <div>마이</div>
        </Link2>
        <Link2 to="/setting" >
          <FontAwesomeIcon icon={faGear} size="2xl" style={{color: "#727479",}} />
          <div>설정</div>
        </Link2>
      </Box>
    </Container>
  )
}

export default Nav

const Container = styled.div`
  position : fixed;
  bottom:0;
  z-index : 10;
  width: 390px;
  height : 110px;
  padding :0 12px;
  padding-bottom : 34px;
  margin : 0 auto;
  background-color : #fff;
`;

const Box = styled.div`
  display : flex;
  justify-content: space-around;
  align-items : center;
  border-top : 2px solid #eee;
  padding-top : 5px;
`;

const Link2 = styled(Link)`
  text-align : center;
`;

const Link3 = styled(Link2)`
  text-align : center;
  border : 3px solid ${BLUE};
  padding-top : 3px;
  border-radius : 50%;
  width : 65px;
  height: 65px;
`;

const Item = styled.div`
  width : 75px;
  height: 60px;
  background-color : #eee;
`;