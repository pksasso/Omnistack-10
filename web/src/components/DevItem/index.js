import React from 'react';
import './styles.css'

function DevItem({ handleDelete, dev }) {

  async function handleDeleteDev() {
    await handleDelete(dev);
  }

  return (
    <li key={dev._id} className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <div className="user-buttons">
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        <button onClick={handleDeleteDev}>Apagar Dev</button>
      </div>
    </li>
  );
}

export default DevItem;