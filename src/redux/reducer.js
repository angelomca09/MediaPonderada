import constants from "./constants"

const INITIAL_STATE = {
    colunas: [
        { tag: "AV1", peso: 0.5 },
        { tag: "AV2", peso: 0.3 },
        { tag: "AV3", peso: 0.2 },
    ],
    linhas: [
        { id: "primeiro", valores: [1, 7, 0] },
        { id: "segundo", valores: [8, 9, 5] },
        { id: "terceiro", valores: [2, 10, 0] },
    ]
}

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case constants.ADD_MEDIA:
            return Object.assign({}, state, { linhas: state.linhas.concat(action.payload) });
        case constants.DELETE_MEDIA:
            var linhasCopia = [...state.linhas]
            linhasCopia.splice(action.payload, 1)
            return Object.assign({}, state, { linhas: linhasCopia })
        case constants.EDIT_MEDIA:
            var linhasCopia = [...state.linhas]
            linhasCopia[action.payload.id] = action.payload.media
            return Object.assign({}, state, { linhas: linhasCopia })
    }
    return state;
}

export default rootReducer;