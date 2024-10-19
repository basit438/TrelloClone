import React, { useRef } from 'react'
import Card from '../Card/Card'
import './CardList.css'
import { useState ,  useContext} from 'react'
import { TrelloContext } from '../../App'


function CardList(props) {

  const ctx = useContext(TrelloContext);
  // console.log(ctx);

  const [showAddCard, setShowAddCard] = useState(false)
  const onAddCardClick = () => {
    setShowAddCard(true);
  }

  const onAddClick = () => { 
    const task = textBoxRef.current.value;
    // console.log(task);
    ctx.dispatch(
      {type: "add-item",
      payload: {
        data : task,
        listName : "todo"
      }
    })
  }

  const textBoxRef = useRef(null);
  return (
    <div className="CardList">
      <h3>{props.title}</h3>
      {
        ctx.state.todo.map(data => <Card title={data} key={data}/>)
      }
      
      {
        showAddCard ?(
          <div className="add-card-toggle-container">
            <textarea ref={textBoxRef} className="add-card-toggle-input-textarea" name="" id=""></textarea>
            <button onClick={onAddClick}>add</button>
            <button onClick={() => setShowAddCard(false)}>cancel</button>
          </div>
        ):(
          <span className="add-another-card-btn" onClick={onAddCardClick}>+ Add another card</span>
        )
      }
      
    </div>
  )
}

export default CardList
