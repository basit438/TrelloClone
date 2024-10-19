import { useReducer, useState, createContext } from "react";

import "./App.css";
import CardList from "./components/CardList/CardList";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// our context provider

export const TrelloContext = createContext();

function App() {
  // our masterData/State

  const initState = {
    todo: [],
    inProgress: [],
    done: [],
  };

  // our reducer function

  const reducerfn = (state, action) => {
    switch (action.type) {
      case 'add-item':
        return {
          ...state,
          [action.payload.listName]: [
            ...state[action.payload.listName],
            action.payload.data,
          ],
        };
  
      case 'move-item': {
        // Remove the card from the source list and add it to the target list
        const fromList = state[action.payload.fromList].filter(item => item !== action.payload.data);
        const toList = [...state[action.payload.toList], action.payload.data];
  
        return {
          ...state,
          [action.payload.fromList]: fromList, // Updated source list
          [action.payload.toList]: toList,     // Updated target list
        };
      }
  
      default:
        return state;
    }
  };
  

  

  // Our reducer hook

  const [state, dispatch] = useReducer(reducerfn, initState);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Trello Clone</h1>
      <TrelloContext.Provider value={{ state, dispatch }}>
        <DndProvider backend={HTML5Backend}>
          <div style={{ display: "flex" }}>
            <CardList id={"todo"} title={"to do"} />
            <CardList id={"inProgress"} title={"In progress"} />
            <CardList id={"done"} title={"Done"} />
          </div>
        </DndProvider>
      </TrelloContext.Provider>
    </>
  );
}

export default App;
