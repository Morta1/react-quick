export const getUserGender = async (username: string) => {
    try {
        console.log(`Trying to determine ${username} gender`)
        const genderResponse = await fetch(`https://api.genderize.io/?name=${username}`);
        const genderObj = await genderResponse?.json();
        const gender = genderObj?.probability > .95 ? genderObj?.gender : 'undetermined'
        console.log(`${username}'s gender is ${gender}`)
        return gender;
    } catch (err) {
        console.error('An error has occurred on getUserGender', err)
        return 'undetermined';
    }
}