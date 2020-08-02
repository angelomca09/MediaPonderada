import constants from "./constants"

export function addMedia(payload){
    return {type: constants.ADD_MEDIA, payload}
}