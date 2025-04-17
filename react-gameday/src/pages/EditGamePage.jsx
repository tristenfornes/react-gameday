import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddGameForm from '../components/AddGameForm';
import '../pages/css/EditGamePage.css';

const EditGamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    axios.get(`https://server-side-code-nqwa.onrender.com/api/games/${id}`)
      .then(res => setInitialData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleEdited = () => navigate('/fixtures');

  return (
    <div>
      <Header />
      <main className="edit-game-page">
        {initialData
          ? <AddGameForm
              initialData={initialData}
              onGameAdded={handleEdited}
              isEdit
            />
          : <p>Loading…</p>}
      </main>
      <Footer />
    </div>
  );
};

export default EditGamePage;
