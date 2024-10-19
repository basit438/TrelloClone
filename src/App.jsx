import { useReducer, useState , createContext } from 'react'

import './App.css'
import CardList from './components/CardList/CardList'


// our context provider

export const TrelloContext = createContext();

function App() {

  // our masterData/State

  const initState ={
    todo: [],
    inProgress: [],
    done: []
  }

// our reducer function

const reducerfn =(state , action)=>{

  // using switch case because it is faster than if else

  switch (action.type) {
    case "add-item":
      console.log(action.payload);
      return {
        ...state,
        [action.payload.listName] : [...[action.payload.listName] , action.payload.data] // made a copy of the array and pushed the data to it 
      }

    case "edit-item":

    case "delete-item":

    case "move-item":


    default:
      return state
  }
}

  // Our reducer hook

  const [state , dispatch] = useReducer(reducerfn, initState)
  return (

    <TrelloContext.Provider value={{state,dispatch}}>
    <h1 style={{textAlign:"center"}}>Trello Clone</h1>
   <div style={{display:"flex"}}>
   <CardList id= {"todo"} title ={"to do"}/>
    <CardList id ={"inProgress"} title ={"In progress"}/>
    <CardList id = {"done"} title ={"Done"}/>
   </div>
    </TrelloContext.Provider>
    
  )
}

export default App
