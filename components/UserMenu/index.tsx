import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";

const UserMenu = ({onChange}: {
    onChange: (username: String) => void;
}) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState<Boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleStart = () => {
        if (username) {
            setError(false)
            onChange && onChange(username)
        } else {
            setError(true)
        }
    }

    return <>
        <StyledInput type="text" onChange={handleChange} placeholder={'Enter username...'}/>
        <StyledButton onClick={handleStart}>Start</StyledButton>
        {error ? <StyledSpan>Please enter a username</StyledSpan> : null}
    </>
};

const StyledSpan = styled.span`
  margin-top: 5px;
  color: red;
`

const StyledInput = styled.input`
  width: 250px;
  height: 50px;
  font-size: 22px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 10px;
  border: none;
  border-radius: 15px;
  background-color: black;
  color: white;
`;

export default UserMenu;
