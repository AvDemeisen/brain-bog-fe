import styled from 'styled-components'

export const ModalElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const ModalInner = styled.div`
  padding: 20px;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.main};
    background-color: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.main};
`