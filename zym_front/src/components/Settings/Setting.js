import React from 'react'
import {BLUE , YELLOW,Wrapper} from '../../styles/common.js'
import Nav from '../Nav.js'

import styled from 'styled-components';

function Setting() {
  return (
    <>
    <Wrapper>
      <Title>설정</Title>
      <Title2>내 정보 수정</Title2>
      <Box1>
        <div>닉네임 변경</div>
        <form>
          <input></input>
          <button type='submit'>변경</button>
        </form>
      </Box1>
      <Box2>
        <div>한줄소개 변경</div>
        <form>
          <input></input>
          <button type='submit'>변경</button>
        </form>
      </Box2>
    </Wrapper>
    <Nav/>
    </>
  )
}

export default Setting

const Title = styled.h1`
margin-top:25px;
font-size: 36px;
font-weight: 700;
`;

const Title2 = styled(Title)`
  font-size: 24px;
  font-weight: 600;
`;

const Box1 = styled.div`
  height : 135px;
  //background-color : #F4F7FF;
  border-radius : 5px;
  margin-top : 10px;

  & > div {
    padding:3px;
    font-size :15px;
    font-weight :600;
    width : 100px;
    text-align:center;
    border-bottom : 2px solid ${BLUE};
    //border-radius : 10px;
  }
`;

const Box2 = styled(Box1)`
  height: 185px;
`;