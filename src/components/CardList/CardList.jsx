import React, { useRef, useState, useContext } from 'react';
import Card from '../Card/Card';
import { TrelloContext } from '../../App';
import { useDrop } from 'react-dnd';

function CardList(props) {
  const ctx = useContext(TrelloContext);
  const [{ isOver }, dropRef] = useDrop({
    accept: 'CARD',
    drop: (item) => {
      ctx.dispatch({
        type: 'move-item',
        payload: {
          fromList: item.id,
          toList: props.id,
          data: item.title,
        },
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [showAddCard, setShowAddCard] = useState(false);
  const textBoxRef = useRef(null);

  const onAddCardClick = () => {
    setShowAddCard(true);
  };

  const onAddClick = () => {
    const task = textBoxRef.current.value;
    ctx.dispatch({
      type: 'add-item',
      payload: {
        data: task,
        listName: props.id,
      },
    });
    textBoxRef.current.value = '';
    setShowAddCard(false);
  };

  return (
    <div ref={dropRef} className={`bg-white rounded-lg shadow-md p-4 w-full max-w-xs ${isOver ? 'bg-gray-200' : 'bg-white'} sm:w-72`}>
      <h3 className="text-lg font-bold mb-2">{props.title}</h3>
      {ctx.state[props.id].map((data, index) => (
        <Card id={props.id} title={data} key={data} index={index} />
      ))}
      {showAddCard ? (
        <div className="mt-4">
          <textarea
            ref={textBoxRef}
            className="w-full p-2 border rounded focus:outline-none focus:ring"
            placeholder="Enter a title for this card..."
          />
          <div className="mt-2">
            <button onClick={onAddClick} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
            <button onClick={() => setShowAddCard(false)} className="ml-2 text-gray-500">Cancel</button>
          </div>
        </div>
      ) : (
        <span onClick={onAddCardClick} className="text-blue-500 cursor-pointer">+ Add another card</span>
      )}
    </div>
  );
}

export default CardList;
