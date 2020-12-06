import constants from "./constants";

const INITIAL_STATE = {
  colunas: [
    { tag: "AC1", peso: 0.1 },
    { tag: "AC2", peso: 0.3 },
    { tag: "AG", peso: 0.2 },
    { tag: "AF", peso: 0.4 },
  ],
  linhas: [{ id: "Exemplo", valores: [5, 5, 5, 5] }],
  media: { id: "", valores: [] },
  mediaIndex: null,
  objetivo: 5,
};

function rootReducer(state = INITIAL_STATE, action) {
  var linhasCopia;
  switch (action.type) {
    case constants.SET_MEDIAS:
      return Object.assign({}, state, { linhas: action.payload });
    case constants.ADD_MEDIA:
      return Object.assign({}, state, {
        linhas: state.linhas.concat(action.payload),
      });
    case constants.DELETE_MEDIA:
      linhasCopia = [...state.linhas];
      linhasCopia.splice(action.payload, 1);
      return Object.assign({}, state, { linhas: linhasCopia });
    case constants.EDIT_MEDIA:
      linhasCopia = [...state.linhas];
      linhasCopia[action.payload.id] = action.payload.media;
      return Object.assign({}, state, { linhas: linhasCopia });
    case constants.SET_MEDIA:
      return Object.assign({}, state, { media: action.payload });
    case constants.SET_EDIT_INDEX:
      return Object.assign({}, state, { mediaIndex: action.payload });
    case constants.SET_FORMULAS:
      return Object.assign({}, state, { colunas: action.payload });
    case constants.SET_OBJETIVO:
      return Object.assign({}, state, { objetivo: action.payload });
    case constants.SAVE:
      let { colunas, linhas, objetivo } = state;
      const dataToSave = { colunas, linhas, objetivo };
      localStorage.setItem("data", JSON.stringify(dataToSave));
      return state;
    case constants.READ:
      const dataToRead = JSON.parse(localStorage.getItem("data"));
      if (dataToRead)
        return Object.assign({}, state, {
          colunas: dataToRead.colunas,
          linhas: dataToRead.linhas,
          objetivo: dataToRead.objetivo,
        });
      else return state;
    default:
      return state;
  }
}

export default rootReducer;
