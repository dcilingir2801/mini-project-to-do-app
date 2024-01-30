import React from 'react';
import ListItem from './ListItem';

const List = ({ data, onDelete }) => {
  return (
    <ul className="list">
      {data.map(item => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default List;