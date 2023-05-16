'use client';

import styled from "styled-components";
import Game from '../components/Board'
import UserMenu from '../components/UserMenu'
import {GameState, ReactionState} from '../types';
import {useState} from "react";
import PopUp from "../components/common/PopUp";
import useTimeout from "../components/hooks/useTimeout";
import Message from "../components/common/Message";
import {saveUserScore} from "../utility/services";

export default function Home() {
    const [gameState, setGameState] = useState<GameState>(GameState.Initial);
    const [username, setUsername] = useState<ReactionState>();
    const [message, setMessage] = useState<ReactionState>();
    const [score, setScore] = useState(0);

    const handleChangeGameState = (username) => {
        console.log(`Hello ${username}`);
        setUsername(username);
        setGameState(GameState.On)
    }

    const handleUserReaction = (message) => {
        console.log('User Reaction')
        if (message === ReactionState.Success) {
            const nextScore = score + 1;
            saveUserScore({username, score: nextScore})
            setScore(nextScore)
        }
        setMessage(message)
        setGameState(GameState.Off)
    }

    useTimeout(() => {
        setGameState(GameState.On)
    }, gameState === GameState.Off ? 1000 : null)


    return <Container>
        <h1>React Quick</h1>
        <Main>
            <span>Score: {score}</span>
            {gameState === GameState.Initial ? <PopUp>
                <UserMenu onChange={handleChangeGameState}/>
            </PopUp> : null}

            <StyledBoard>
                <Divider/>
                {gameState === GameState.On ? <Game state={gameState} onUserReaction={handleUserReaction}/> : null}
            </StyledBoard>

            {message ? <PopUp position={'bottom'}>
                <Message message={message} color={message === ReactionState.Success ? 'green' : 'red'}/>
            </PopUp> : null}
        </Main>
    </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`

const Main = styled.main`
  position: relative;
  margin: 20px auto;
  width: 1024px;
  height: 500px;
`


const Divider = styled.div`
  position: absolute;
  height: 100%;
  width: 5px;
  background-color: white;
  left: 50%;
  transform: translateX(-50%);
`

const StyledBoard = styled.div`
  position: relative;
  height: 500px;
  border: 1px solid white;
  background-color: red;
`
