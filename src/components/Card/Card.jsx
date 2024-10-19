import React from 'react';
import './Card.css';
import { useDrag } from 'react-dnd';

function Card(props) {
  // Define the drag properties using useDrag hook
  const [{ opacity, background }, ref] = useDrag(() => ({
    type: 'CARD', // Type of item for drag-and-drop, must match with the drop target
    item: { title: props.title, id: props.id }, // What data we want to carry along when dragging the item
    collect: (monitor) => ({
      // This is used to track the drag state and adjust the styling accordingly
      opacity: monitor.isDragging() ? 0.4 : 1,
      background: monitor.isDragging() ? 'blue' : 'white',
    }),
  }));

  // The card component to be displayed with dynamic opacity and background when dragged
  return (
    <div ref={ref} className="Card" style={{ opacity, background }}>
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
