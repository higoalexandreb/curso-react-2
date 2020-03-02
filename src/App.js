import React, { useState } from 'react';

function App() {
  const [techs, setTech] = useState(['ReactJS', 'NodeJS']);

  function handleAdd() {
    setTech([...techs, 'React Native']);
  }

  return (
    <div className="App">
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
