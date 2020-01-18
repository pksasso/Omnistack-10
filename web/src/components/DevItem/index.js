import React from 'react';
import './styles.css'

function DevItem({ handleDelete, dev, editDev }) {

  async function handleDeleteDev() {
    await handleDelete(dev);
  }

  function handleEditDev() {
    editDev(dev);
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
        <a href={`https://github.com/${dev.github_username}`}>Github</a>
        <button
          className="edit"
          onClick={() => handleEditDev()}
        >Editar Dev</button>
        <button
          className="delete"
          onClick={() => { if (window.confirm('Apagar esse dev?')) handleDeleteDev() }}
        >Apagar Dev</button>
      </div>
    </li>
  );
}

export default DevItem;