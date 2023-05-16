import {promises as asyncFs} from "fs";
import path from "path";
import {User} from "../../types";

export const writeToFile = async (data) => {
    try {
        const target = path.resolve('backend/db/leaderboard.json');
        await asyncFs.writeFile(target, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
        console.error(`Error occurred while creating`, err);
    }
}

export const readJson = async (): Promise<User[]> => {
    try {
        const target = path.resolve('backend/db/leaderboard.json');
        const data = await asyncFs.readFile(target, "binary");
        return JSON.parse(data);
    } catch (err) {
        console.log(`File doesn't exist`, err);
        throw err;
    }
}