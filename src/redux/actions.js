import constants from "./constants"

export function addMedia(payload){
    return {type: constants.ADD_MEDIA, payload}
}

export function deleteMedia(payload){
    return {type: constants.DELETE_MEDIA, payload}
}

export function editMedia(payload){
    return {type: constants.EDIT_MEDIA, payload}
}