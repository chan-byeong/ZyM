import React from 'react'
import { styled } from 'styled-components'
import {BLUE , YELLOW,Wrapper} from '../../styles/common.js'



function Status() {
  return (
    <Container>
      <CharBox></CharBox>
      <Info>
        <div>
          닉네임
        </div>
        <div className='onOff'>
          ON
        </div>
      </Info>
    </Container>
  )
}

export default Status

const Container = styled.div`
 flex-basis: calc(25% - 10px);
  height : 128px;
  margin : 4px;
  border-radius : 5px;
  background-color : ${BLUE};
  
  &:hover { 
    background-color : ${YELLOW};
    .onOff {
      color : ${BLUE};
    }
  }

`;

const CharBox = styled.div`
  height : 70%;
  display : flex;
  justify-content : center;
  align-items : center;
  //border : 1px solid white;
`;

const Info = styled.div`
  & > div {
    font-size: 12px;
    font-weight : 500;
    text-align : center;
  }

  .onOff {
    color : ${YELLOW}
  }
`;
