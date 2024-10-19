import { useReducer, createContext } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// our context provider
export const TrelloContext = createContext();

function App() {
  const initState = {
    todo: [],
    inProgress: [],
    done: [],
  };

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
        const fromList = state[action.payload.fromList].filter(item => item !== action.payload.data);
        const toList = [...state[action.payload.toList], action.payload.data];
        return {
          ...state,
          [action.payload.fromList]: fromList,
          [action.payload.toList]: toList,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerfn, initState);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-700 p-8">
      <h1 className="text-4xl font-extrabold text-white text-center mb-12">
        Trello Clone
      </h1>
      <TrelloContext.Provider value={{ state, dispatch }}>
        <DndProvider backend={HTML5Backend}>
          <div className="flex justify-around gap-8">
            <CardList id="todo" title="To Do" />
            <CardList id="inProgress" title="In Progress" />
            <CardList id="done" title="Done" />
          </div>
        </DndProvider>
      </TrelloContext.Provider>
    </div>
  );
}

export default App;
