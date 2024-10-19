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
      case 'edit-item': {
        const list = [...state[action.payload.listName]];
        list[action.payload.index] = action.payload.newData;
        return {
          ...state,
          [action.payload.listName]: list,
        };
      }
      case 'delete-item': {
        const newList = state[action.payload.listName].filter((_, idx) => idx !== action.payload.index);
        return {
          ...state,
          [action.payload.listName]: newList,
        };
      }
      default:
        return state;
    }
  };
  

  const [state, dispatch] = useReducer(reducerfn, initState);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-700 p-8">
      <h1 className="text-4xl font-extrabold text-white text-center mb-5">
      TrackIt
      </h1>
      <h4 className="text-2xl font-bold text-white text-center mb-8">Focuses on tracking tasks and progress.</h4>
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
