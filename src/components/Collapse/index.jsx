import { useState } from 'react'
import ArrowDown from '../../assets/arrowDown.png'
import ArrowUp from '../../assets/arrowUp.png'
import '../../components/Collapse/styles.css'

function Collapse({title, description}){
  const [open, setOpen] = useState(false);

  return (
    <div className='container'>

        <div className="titleContainer">
        <h2 className='collapseTitle'>{title}</h2>

        <button type='button' onClick={() => setOpen(!open)} className='collapseButton'>
          {open === true ? <img src={ArrowDown} alt="open" className='arrow' /> : <img src={ArrowUp} alt="close" className='arrow'/>}
        </button>

        </div>

        <div className='collapseDescriptionContainer'>
        {open && <div className='collapseDescription'>{description}</div>}
        </div>

    </div>
  )
  }

export default Collapse