import {User} from "../../types";
import {readJson, writeToFile} from "../utility";
import {getUserGender} from "./genderService";
import {getMoreUserInfo} from "./randomUserService";

export const addUser = async (user: User) => {
    let leaderboard: User[] = await readJson();
    if (Array.isArray(leaderboard)) {
        const userExistIndex = leaderboard.findIndex((leaderboardUser) => leaderboardUser.username === user.username);
        let userInformation = {};
        if (userExistIndex !== -1) {
            leaderboard = leaderboard.map((leaderboardUser, index) =>
                index === userExistIndex ? {...leaderboardUser, ...user} : leaderboardUser);
        } else {
            const userGender = await getUserGender(user.username);
            userInformation = await getMoreUserInfo(userGender);
            leaderboard = [...leaderboard, {...user, ...userInformation}];
        }
        leaderboard.sort((a, b) => b.score - a.score)
        await writeToFile(leaderboard);
    }
}

export const getAllUsers = async () => {
    return await readJson();
}