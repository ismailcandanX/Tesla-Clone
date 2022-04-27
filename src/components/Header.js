import React from 'react'
import styled from 'styled-components'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

const Header = (props) => {
  const [burgerStatus, setBurgerStatus] = React.useState(false)
  const cars = useSelector(selectCars)
  return (
    <Container>
      <Logo>
        <a href="#">
          <img src="/images/logo.svg" />
        </a>
      </Logo>
      <Menu>
        <ul>
          {cars &&
            cars.map((car, index) => (
              <li key={index}>
                <a href="#">{car}</a>
              </li>
            ))}
        </ul>
      </Menu>
      <RightMenu>
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li onClick={() => setBurgerStatus(true)}>
            <a href="#">Menu</a>
          </li>
        </ul>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseIcon>
          <a onClick={() => setBurgerStatus(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </a>
        </CloseIcon>
        <BurgerMenu>
          <a href="#">Existing Inventory</a>
          <a href="#">Used Inventory</a>
          <a href="#">Trade-In</a>
          <a href="#">Test Drive</a>
          <a href="#">Insurance</a>
          <a href="#">Cybertruck</a>
          <a href="#">Roadster</a>
          <a href="#">Semi</a>
          <a href="#">Charging</a>
          <a href="#">Powerwall</a>
          <a href="#">Commercial Energy</a>
          <a href="#">Utilities</a>
          <a href="#">Find Us</a>
          <a href="#">Support</a>
          <a href="#">Investor Relations</a>
          <a href="#">Shop</a>
          <a href="#">Account</a>
        </BurgerMenu>
      </BurgerNav>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
  justify-content: space-between;
`
const Logo = styled.div`
  margin-top: 10px;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  font-size: 14px;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 0 20px;
    font-weight: 500;
    text-transform: capitalize;
    flex-wrap: nowrap;
  }
  @media (max-width: 992px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 0 20px;
    font-weight: 500;
    text-transform: capitalize;
    flex-wrap: nowrap;
    @media (max-width: 576px) {
      padding: 0 10px;
    }
  }
`

const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20rem;
  background: white;
  overflow: auto;
  z-index: 3;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
`
const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    margin: 1rem;
  }
`

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    margin: 0.5rem 1rem;
    width: 80%;
    text-align: left;
    padding: 0.5rem;
  }
  a:hover {
    background: #f5f5f5;
  }
`

export default Header
