// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 50px;
  width: 50px;
`
export const Text = styled.p`
  color: #e2e8f0;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
`
export const Button = styled.button`
  background-color: #06b6d4;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
`
