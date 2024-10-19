import React, { useRef, useState, useContext } from 'react';
import Card from '../Card/Card';
import './CardList.css';
import { TrelloContext } from '../../App';
import { useDrop } from 'react-dnd';

function CardList(props) {
  // Using drop from react-dnd to handle dropping of items
  const [{ isOver }, dropRef] = useDrop({
    accept: 'CARD', // Accepting only 'CARD' items
    drop: (item) => {
      // When a card is dropped, dispatch an action to move the item to the target list
      ctx.dispatch({
        type: 'move-item',
        payload: {
          fromList: item.id, // The list where the card is coming from
          toList: props.id,  // The list where the card is being dropped
          data: item.title,  // The data being transferred
        },
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(), // Boolean to indicate if the item is over the list
    }),
  });

  const ctx = useContext(TrelloContext); // Accessing global state and dispatch from context

  const [showAddCard, setShowAddCard] = useState(false); // State for toggling the add card form

  const onAddCardClick = () => {
    setShowAddCard(true);
  };

  const onAddClick = () => {
    const task = textBoxRef.current.value; // Get the task from the input
    ctx.dispatch({
      type: 'add-item',
      payload: {
        data: task,        // Data to be added (task)
        listName: props.id // To which list it should be added (todo, inProgress, done)
      },
    });
    textBoxRef.current.value = ''; // Clear the input after adding the card
    setShowAddCard(false); // Hide the add card form
  };

  const textBoxRef = useRef(null); // Reference for the input textarea

  return (
    <div ref={dropRef} className="CardList" style={{ backgroundColor: isOver ? '#f0f0f0' : 'white' }}>
      <h3>{props.title}</h3>
      
      {/* Render the cards in this list */}
      {ctx.state[props.id].map((data) => (
        <Card id={props.id} title={data} key={data} />
      ))}

      {/* Add card form toggle */}
      {showAddCard ? (
        <div className="add-card-toggle-container">
          <textarea ref={textBoxRef} className="add-card-toggle-input-textarea"></textarea>
          <button onClick={onAddClick}>Add</button>
          <button onClick={() => setShowAddCard(false)}>Cancel</button>
        </div>
      ) : (
        <span className="add-another-card-btn" onClick={onAddCardClick}>
          + Add another card
        </span>
      )}
    </div>
  );
}

export default CardList;
