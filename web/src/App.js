import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Main.css';

import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
import EditForm from './components/EditForm';


function App() {

  const [devs, setDevs] = useState([]);
  let [isEdit, setIsEdit] = useState(false);
  const [editDev, setEditDev] = useState();

  useEffect(() => {
    async function loadDevs() {
      const respose = await api.get('/devs');

      setDevs(respose.data);
    }
    loadDevs();
  }, [devs]);

  async function handleAddDev(data) {

    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  async function handleDeleteDev(dev) {

    await api.delete(`/devs?github_username=${dev.github_username}`);

  }

  async function handleEditDev(data) {
    setIsEdit(isEdit = !isEdit);

    await api.post('/edit', data);
  }

  function isEditingDev(dev) {

    setEditDev(dev);
    setIsEdit(isEdit = !isEdit);
  }

  function mainBody() {

    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev} />
        </aside>
        <main>
          <ul>
            {devs.map(dev => (
              <DevItem
                key={dev._id}
                dev={dev}
                handleDelete={handleDeleteDev}
                editDev={isEditingDev}
              />
            ))}
          </ul>
        </main>
      </div>
    );
  }

  function editBody(editDev) {
    return (
      <div id="app">
        <EditForm dev={editDev} onSubmit={handleEditDev} />
      </div>
    );
  }

  return (
    <div >
      {isEdit ?
        editBody(editDev)
        : mainBody()
      }
    </div>
  );
}

export default App;
