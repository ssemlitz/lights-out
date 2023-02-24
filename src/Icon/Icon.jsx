import React, {useState} from "react";

const Icon = () => {

  const [icons, setIcons] = useState(['bone', 'cloud'])

  const options = [
    'angry',
    'anchor',
    'archive',
    'at',
    'archway',
    'baby',
    'bell',
    'bolt',
    'bone',
    'car',
    'city',
    'cloud',
    'couch'
  ]

  function addIcon() {    
    let idx = Math.floor(Math.random() * options.length)
    let newIcon = options[idx]
    setIcons([...icons, newIcon])
  }
  
  const iconList = icons.map(i => <i className={`fas fa-${i}`} />)

  return ( 
    <>
      <div>
        <h1>Icons: {iconList} </h1>
        <button onClick={addIcon}>Add New Icon</button>
      </div>
    </>
  );
}

export default Icon;