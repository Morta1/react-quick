import styled from "styled-components";

const Message = ({message, color}) => {
    return <Style color={color}>
        {message}
    </Style>
};

const Style = styled.span`
  color: ${({color}) => color};
`

export default Message;
