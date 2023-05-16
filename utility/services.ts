import {User} from "../types";

export const saveUserScore = async (user: User): Promise<void> => {
    try {
        await fetch('http://localhost:3000/api/user', {
            method: "POST",
            body: JSON.stringify(user)
        })
    } catch (err) {
        console.error(`An Error has occurred while saving user score`);
        return null;
    }
}