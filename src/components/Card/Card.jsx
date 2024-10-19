import React from 'react';
import { useDrag } from 'react-dnd';

function Card(props) {
  const [{ opacity, background }, ref] = useDrag(() => ({
    type: 'CARD',
    item: { title: props.title, id: props.id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
      background: monitor.isDragging() ? 'blue' : 'white',
    }),
  }));

  return (
    <div ref={ref} className="bg-white p-3 rounded-lg shadow mb-2" style={{ opacity, background }}>
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
