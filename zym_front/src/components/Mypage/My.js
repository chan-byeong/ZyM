import React from 'react'
import {BLUE , YELLOW,Wrapper} from '../../styles/common.js'
import Nav from '../Nav.js'

import styled from 'styled-components';

function My() {
  return (
    <>
      <Wrapper>
        <Title>마이</Title>
        <Box>
          <Box3>
            <CharBox>
              <img alt='춘식이'/>
              <div>Lv. 6</div>
            </CharBox>
            <InfoBox>
              <div>닉네임</div>
              <div className='intro'>한줄소개?</div>
            </InfoBox>
          </Box3>
          <Stat>
            <div><div>체중</div><p>50</p></div>
            <div><div>골격근량</div><p>26</p></div>
            <div><div>체지방량</div><p>23</p></div>
          </Stat>
        </Box>
        <Box2></Box2>
      </Wrapper>
      <Nav/>
    </>
  )
}

export default My

const Title = styled.h1`
margin-top:25px;
font-size: 36px;
font-weight: 700;
`;

const Box = styled.div`
  height : 230px;
  background-color : #F4F7FF;
  border-radius : 5px;
  margin-top : 8px;
`;

const Box2 = styled(Box)`
  height : 500px;
`;

const Box3 = styled.div`
  height : 60%;
  display : flex;
`;

const CharBox = styled.div`
  width : 90px;
  height : 100%;
  position : relative;
  
  //border : 1px solid black;

  & > img {
    width : 100%;
    height : 90px;
    border-radius : 50%;
    border : 3px solid ${BLUE};
  }

  & > div {
    position : absolute;
    bottom : 20px;
    left : 14px;

    width : 60px;
    background-color : ${YELLOW};
    border-radius : 10px;
    
    text-align : center;
    color : #fff;
    font-size: 14px;
    font-weight : 600;
  }
`;

const InfoBox = styled.div`
  width : 255px;
  height : 100%;

  //border : 1px solid black;

  & > div {
    height : 35px;
    margin : 0 6px;
    margin-top:4px;
    border: 2px solid ${BLUE};
    border-radius : 10px;
    padding : 4px;
    background-color: #fff;

    font-size : 12px;
    font-weight : 600;

    display :flex;
    align-items:center;
  }

  & > .intro {
    margin-top : 15px;
    height : 64px;
  }
`;

const Stat = styled.div`
  height : 30%;

  border : 2px solid #d1d1d1;
  border-radius : 10px;
  margin : 0 4px;

  display :flex;
  justify-content : space-around;

  & > div {
    width: 70px;
    display :flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-around;

    border : 2px solid ${BLUE};

    font-size :16px;
    font-weight : 600;
    border-radius : 10px;

    & > div {
      text-align : center;
    }
  }
  
`;