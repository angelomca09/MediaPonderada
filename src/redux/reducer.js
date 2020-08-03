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
            return Object.assign({}, state, { linhas: state.linhas.concat(action.payload)  });
    }
    return state;
}

export default rootReducer;