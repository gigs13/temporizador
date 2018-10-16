// ./react-redux-client/src/actions/tempoActions.js
const apiUrl = "/api/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_TEMPO'
  }
}

export const addNewTempo = (tempo) => {console.log(tempo)
  return (dispatch) => {
    dispatch(addNewTempoRequest(tempo));
    return fetch(apiUrl, {
      method:'post',
      body: tempo,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.tempo);
          dispatch(addNewTempoRequestSuccess(data.tempo, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewTempoRequestFailed(error))
        })
      }
    })
  }
}

export const addNewTempoRequest = (tempo) => {
  return {
    type: 'ADD_NEW_TEMPO_REQUEST',
    tempo
  }
}

export const addNewTempoRequestSuccess = (tempo,message) => {
  return {
    type: 'ADD_NEW_TEMPO_REQUEST_SUCCESS',
    tempo:tempo,
    message:message
  }
}

export const addNewTempoRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_TEMPO_REQUEST_FAILED',
    error
  }
}

export const deleteTempo = (tempo) => {
}

//Async action
export const fetchTempos = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {
    dispatch(fetchTemposRequest());
    // Returns a promise
    return fetch(apiUrl).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(fetchTemposSuccess(data.tempos,data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(fetchTemposFailed(error));
        })
      }
    })
  }
}

export const fetchTemposRequest = () => {
  return {
    type:'FETCH_TEMPOS_REQUEST'
  }
}

//Sync action
export const fetchTemposSuccess = (tempos,message) => {
  return {
    type: 'FETCH_TEMPOS_SUCCESS',
    tempos: tempos,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchTemposFailed = (error) => {
  return {
    type:'FETCH_TEMPOS_FAILED',
    error
  }
}

export const fetchTempoById = (tempoId) => {
  return (dispatch) => {
    dispatch(fetchTempoRequest());
    // Returns a promise
    return fetch(apiUrl + tempoId).then(response => {
      console.log(response)
      if(response.ok){
        response.json().then(data => {
          dispatch(fetchTempoSuccess(data.tempo[0], data.message));
        })
      }
      else{
        response.json().then(error => {
         dispatch(fetchTempoFailed(error));
        })
      }
    })
  }
}

export const fetchTempoRequest = () => {
  return {
    type:'FETCH_TEMPO_REQUEST'
  }
}

//Sync action
export const fetchTempoSuccess = (tempo,message) => {
  return {
    type: 'FETCH_TEMPO_SUCCESS',
    tempo: tempo,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchTempoFailed = (error) => {
  return {
    type:'FETCH_TEMPO_FAILED',
    error
  }
}

export const showEditModal = (tempoToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    tempo:tempoToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editTempo = (tempo) => {
  return (dispatch) => {
    dispatch(editTempoRequest(tempo));
    return fetch(apiUrl, {
      method:'put',
      body:tempo
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(editTempoSuccess(data.tempo,data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(editTempoFailed(error));
        })
      }
    })
  }
}

export const editTempoRequest = (tempo) => {
   return {
     type:'EDIT_TEMPO_REQUEST',
     tempo
   }
}

export const editTempoSuccess = (tempo,message) => {
  return {
    type:'EDIT_TEMPO_SUCCESS',
    tempo:tempo,
    message:message
  }
}

export const editTempoFailed = (error) => {
  return {
    type:'EDIT_TEMPO_FAILED',
    error
  }
}
