import React from 'react'
import {BLUE , YELLOW,Wrapper} from '../../styles/common.js'
import Nav from '../Nav.js'
import Status from './Status.js'

import { styled } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus } from "@fortawesome/free-solid-svg-icons";



function Group() {
  return (
    <>
      <Wrapper>
        <Title>그룹</Title>
        <Box>
          <BtnPlus>친구 추가</BtnPlus>
          <FontAwesomeIcon icon={faUserPlus} size="lg" style={{color: "#000000",}} />
        </Box>
        <GroupBox>
          <Status/>
          <Status/>
          <Status/>
          <Status/>
          <Status/>
          <Status/>
          <Status/>
          <Status/>
          <Status/>
          <Status/>
          <Status/>

        </GroupBox>
      </Wrapper>
      <Nav/>
    </>

  )
}

export default Group

const Title = styled.h1`
margin-top:25px;
font-size: 36px;
font-weight: 700;
`;

const Box = styled.div`
  position :  absolute;
  right : 20px;
  top : 165px;
  width : 128px;
  height : 44px;
  border : 2px solid ${YELLOW};
  border-radius : 10px;
  display : flex;
  align-items : center;
  justify-content : center;

  cursor: pointer;
`;

const BtnPlus = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-right : 10px;
`;

const GroupBox = styled.div`
  width : 100%;
  margin-top: 100px;
  //background-color : #eee;

  display : flex;
  justify-content : center;
  flex-wrap : wrap;
  overflow-x : auto;
`;

