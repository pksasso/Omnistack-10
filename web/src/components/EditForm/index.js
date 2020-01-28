import React, { useState } from 'react';

import './styles.css';

function EditForm({ dev, onSubmit }) {

  const [latitude, setLatitude] = useState(dev.latitude);
  const [longitude, setLongitude] = useState(dev.longitude);
  const [avatar_url, setAvatarUrl] = useState(dev.avatar_url);
  const [name, setName] = useState(dev.name);
  const [bio, setBio] = useState(dev.bio === null ? '' : dev.bio);
  const [techs, setTechs] = useState(dev.techs);
  const id = dev.id;

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      id,
      name,
      avatar_url,
      techs,
      bio,
      latitude,
      longitude
    });
  }

  return (
    <div className="main">
      <strong>Editar</strong>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="name">Nome</label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="'bio">Bio</label>
          <input
            name="bio"
            id="bio"
            value={bio}
            onChange={e => setBio(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="avatar_url">Avatar</label>
          <input
            name="avatar_url"
            id="avatar_url"
            value={avatar_url}
            onChange={e => setAvatarUrl(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Techs</label>
          <input
            name="techs"
            id="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              type="number"
              name="latitute"
              id="latitude"
              required
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              required
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );


}

export default EditForm;