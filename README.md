# React-Quick

A game that tests and provides feedback to the user on his reaction time and quick decision-making

## Getting Started
```shell
yarn install

yarn dev
```

## API
Using `next.js` file based api under `/app/api`

`GET /api/users`

`POST /api/user`
    
    body: {
        username: string,
        score: number
    }


## DB
I'm using a JSON file as a db, located at `backend/db/leaderboard.json`