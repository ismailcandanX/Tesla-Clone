import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({
  backgroundImg,
  description,
  leftBtnText,
  rightBtnText,
  title,
  id,
}) {
  return (
    <Wrap bgImage={backgroundImg} id={id} >
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="./images/down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(./images/${props.bgImage})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const Buttons = styled.div``
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;

  @media (max-width: 576px) {
    width: 90vw;
  }
`
const RightButton = styled(LeftButton)`
  background: white;
  color: rgba(23, 26, 32, 0.8);
  opacity: 1.65;
`
const DownArrow = styled.img`
  height: 40px;
  margin-top: 20px;
  animation: animateDown infinite 1.5s;
`

export default Section
