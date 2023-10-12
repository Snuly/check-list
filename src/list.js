import React from 'react';


const List = ({ content }) => {
  return (
    <div>
      <h1>Content List</h1>
      <ul>
        {content.map((item) => (
          <li key={item.id}>
            <p>Title: {item.title}</p>
            <label>
              Completed:
              <input type="checkbox" checked={item.completed} readOnly />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
