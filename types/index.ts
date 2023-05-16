export const enum GameState {
    Initial = null,
    Off = 0,
    On
}

export const enum ReactionState {
    TooSoon = 'Too Soon',
    WrongKey = 'Wrong key',
    TooLate = 'Too Late',
    Success = 'Success!'
}

export const enum Position {
    Left = 'a',
    Right = 'l',
    Initial = null,
    Unset = -1
}

export interface User {
    username: string;
    score: number;
}