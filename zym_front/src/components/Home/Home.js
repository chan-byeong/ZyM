import React from 'react'
import {BLUE , YELLOW,Wrapper} from '../../styles/common.js'
import Nav from '../Nav.js'
import { styled } from 'styled-components'

function Home() {

  
  return (
    <>
      <Wrapper>
        <Box1>
          <Item>0일째 운동 중</Item>
          <Item2>Lv. 0</Item2>
        </Box1>
        <Box2></Box2>
        <Box3>  
          <Timer/>
          <BtnGroup>
            <Btn2>멈춰!</Btn2>
            운동
            <Btn>시작!</Btn>
          </BtnGroup>

        </Box3>
      </Wrapper>
      <Nav/>
    </>

  )
}

export default Home

const Box1 = styled.div`
  width : 100%;
  height : 65px;
  background-color : #eee;
  margin-top : 25px;

  display: flex;
  align-items : center;
  justify-content : space-around;
`;

const Box2 = styled.div`
  width : 100%;
  height : 331px;
  border : 3px solid ${BLUE};
  margin-top : 25px;
  border-radius : 10px;

  background-color : #eee;
`;

const Box3 = styled.div`
  width : 100%;
  height : 164px;
  border : 2px solid ${BLUE};
  margin-top : 25px;
  border-radius : 10px;

  background-color : #eee;
  

  display :flex;
  flex-direction : column;
  //align-items : center;
  justify-content : center;
`;

const Item = styled.div`
  width : 160px;
  height : 55px;
  border-radius : 10px;
  background-color : ${BLUE};

  display : flex;
  justify-content : center;
  align-items:center;

  font-size : 18px;
  font-weight : 600;
  color : #fff;
`;

const Item2 = styled(Item)`
  width : 110px;
  background-color : ${YELLOW};
  color : #000;
`;

const Timer = styled.div`
  width : 277px;
  height : 76px;
  border : 1px solid ${BLUE};
  margin : 0 auto;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content :space-around;
  align-items : center;
  font-size : 32px;
  font-weight: 600;
`;

const Btn = styled.button`
  width : 55px;
  height :55px;
  border-radius : 50%;
  border : 4px solid ${BLUE};
  font-size : 16px;
  font-weight : 600;
`;

const Btn2 = styled(Btn)`
  border : 4px solid ${YELLOW};
`;