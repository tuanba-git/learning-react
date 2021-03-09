import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TodoItem from '../Components/TodoItem/index';

TodoList.propTypes = {
  todoList: PropTypes.array
};

TodoList.deafaultProps = {
  todoList: []
};

function TodoList({ todoList }) {
  return (
    <div class="container">
      {todoList.map(item => (
        <TodoItem
          key={item.key}
          id={item.id}
          title={item.title}
          description={item.description}
          status={item.status}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoList;
