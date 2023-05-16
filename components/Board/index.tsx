import React, {useCallback, useEffect, useState} from 'react';
import styled from "styled-components";
import {getRandomNumber} from "../../utility";
import {GameState, Position, ReactionState} from '../../types'
import useEventListener from "../hooks/useEventListener";

const Board = ({state, onUserReaction}) => {
    const [position, setPosition] = useState<Position>(Position.Initial);

    useEffect(() => {
        console.log(`Board state: ${state}`)
    }, [state]);

    const handleKeyDown = useCallback((e) => {
        let message;
        if (e.key === Position.Left || e.key === Position.Right) {
            if (e.key === position) {
                message = (ReactionState.Success)
            } else if (position === Position.Unset) {
                message = (ReactionState.TooLate)
            } else if (!position) {
                message = (ReactionState.TooSoon)
            }
        } else {
            message = (ReactionState.WrongKey);
        }
        onUserReaction(message);
    }, [position]);

    useEventListener('keydown', state === GameState.On ? handleKeyDown : () => {
    }, document);

    useEffect(() => {
        if (position !== Position.Initial && position !== Position.Unset) {
            setTimeout(() => {
                console.log('Done')
                setPosition(Position.Unset)
            }, 1000);
        }
    }, [position])

    useEffect(() => {
        if (state === GameState.Initial) return;

        const randomTime = getRandomNumber(2, 5);
        console.info('randomTime', randomTime)
        setTimeout(() => {
            const randomPosition = Math.random();
            console.info('randomPosition', randomPosition > .5 ? Position.Left : Position.Right)
            setPosition(randomPosition > .5 ? Position.Left : Position.Right)
        }, randomTime * 1000);

    }, [state])

    return <>
        {state === GameState.On && position !== Position.Unset && position !== Position.Initial ?
            <Box position={position}/> : null}
    </>
};

const Box = styled.div`
  width: 150px;
  height: 150px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: ${({position}) => position === Position.Left ? '25%' : '75%'};
  transform: translate(-50%, -50%);
`
export default Board;
