import moment from "moment"
export const checkExpireToken = (expToken) => {
    const now = moment().unix();
    return now > expToken;
}