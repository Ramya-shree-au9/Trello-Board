import axios from "axios";
const url = "http://localhost:3001/api/todo";

export function tododata() {
 
  const output = axios.get(`${url}/todolist`);
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "TODODATA",
          payload: data,
        });
      });
    }; 
}

export function addtodolist(title) {
  const output = axios.post(`${url}/addTodoList`,{title:title});
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "ADDTODODATA",
          payload: data,
        });
      });
    }; 
}

export function addtodocard(title,id) {
  const output = axios.patch(`${url}/addTodoCard/${id}`,{text:title});
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "ADDTODODATA",
          payload: data,
        });
      });
    }; 
}

export function removetodoList(id) {
  const output = axios.delete(`${url}/removeList/${id}`);
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "ADDTODODATA",
          payload: data,
        });
      });
    }; 
}

export function removetodoCard(id) {
  const output = axios.patch(`${url}/removeCard/${id}`);
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "ADDTODODATA",
          payload: data,
        });
      });
    }; 
}
export function editTitleList(title,id) {
  const output = axios.patch(`${url}/updateList`,{
    id:id,
    title:title
  });
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "ADDTODODATA",
          payload: data,
        });
      });
    }; 
}

export function editTitleCard(text,id) {
  const output = axios.patch(`${url}/updateCard`,{
    id:id,
    text:text
  });
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "ADDTODODATA",
          payload: data,
        });
      });
    }; 
}

export function sort(start,end,startin,endin) {
  const output = axios.post(`${url}/sortTodoCard`,{
    droppableIdStart:start,
    droppableIdEnd:end,
    dropableIndexStart:startin,
    dropableIndexEnd:endin
  });
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "ADDTODODATA",
          payload: data,
        });
      });
    }; 
}