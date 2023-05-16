export const getMoreUserInfo = async (gender: string) => {
    try {
        console.log(`Fetching more information for a ${gender} user`)
        const infoResponse = await fetch(`https://randomuser.me/api/?gender=${gender}`);
        const infoObject = await infoResponse?.json();
        return infoObject?.results?.[0] || {};
    } catch (err) {
        console.error('An error has occurred on getUserGender', err)
        return {};
    }
}