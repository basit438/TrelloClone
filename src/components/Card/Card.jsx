import React, { useState, useContext } from 'react';
import { useDrag } from 'react-dnd';
import { TrelloContext } from '../../App';

function Card(props) {
  const { dispatch } = useContext(TrelloContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.title);

  const [{ opacity, background }, ref] = useDrag(() => ({
    type: 'CARD',
    item: { title: props.title, id: props.id, index: props.index },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
      background: monitor.isDragging() ? 'blue' : 'white',
    }),
  }));

  const handleDelete = () => {
    dispatch({
      type: 'delete-item',
      payload: { listName: props.id, index: props.index },
    });
  };

  const handleEditSave = () => {
    dispatch({
      type: 'edit-item',
      payload: { listName: props.id, index: props.index, newData: editedText },
    });
    setIsEditing(false);
  };

  return (
    <div ref={ref} className="bg-white p-3 rounded-lg shadow mb-2" style={{ opacity, background }}>
      {isEditing ? (
        <div>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring"
          />
          <button onClick={handleEditSave} className="bg-blue-500 text-white px-2 py-1 rounded mt-2">Save</button>
        </div>
      ) : (
        <p>{props.title}</p>
      )}
      <div className="flex justify-end space-x-2 mt-2">
        <button onClick={() => setIsEditing(!isEditing)} className="text-blue-500">Edit</button>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      </div>
    </div>
  );
}

export default Card;
