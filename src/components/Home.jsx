import React, { useState } from 'react';
import List from './List';

const Home = () => {
  const [data, setData] = useState([
    { id: 1, title: 'Complete React assignment', isCompleted: false },
    { id: 2, title: 'Read a book', isCompleted: true },
    { id: 3, title: 'Go for a run', isCompleted: false },
  ]);

  const handleDelete = (itemId) => {
    const updatedData = data.filter(item => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <div className="home">
      <h3>To-Do List</h3>
      <List data={data} onDelete={handleDelete} />
    </div>
  );
};

export default Home;