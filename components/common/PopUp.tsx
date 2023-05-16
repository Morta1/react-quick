import styled from "styled-components";

const PopUp = ({position, children}) => {
    return <Style position={position}>
        {children}
    </Style>
};

const Style = styled.div`
  position: absolute;
  top: ${({position}) => position === 'bottom' ? '125%' : '50%'};
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 200px;

  color: black;
  border: 2px solid #000000;
  background-color: white;
  z-index: 1;
`

export default PopUp;
