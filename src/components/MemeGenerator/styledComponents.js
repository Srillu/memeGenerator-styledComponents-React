// Style your components here
import styled from 'styled-components'

export const BgContainer = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70vw;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  border: 0px solid;
  color: #ffffff;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
`

export const MemeBackground = styled.div`
  background: url(${props => props.bgImage});
  height: 300px;
  width: 300px;
  background-size: cover;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Paragraph = styled.p`
  font-size: ${props => props.fontSize}px;
`
