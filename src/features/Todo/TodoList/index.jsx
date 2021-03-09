import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from '../Components/TodoItem/index';
import './styles.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func
};

TodoList.deafaultProps = {
  todoList: [],
  onTodoClick: null
};

function TodoList({ todoList, onTodoCLick }) {
  const handleTodoClick = (item, index) => {
    if (!onTodoCLick) return;
    onTodoCLick(item, index);
  };
  return (
    <div className="container">
      {todoList.map((item, idx) => (
        <div key={idx} onClick={() => handleTodoClick(item, idx)}>
          <TodoItem
            id={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
          ></TodoItem>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
