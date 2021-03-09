import React from 'react';
import './styles.scss';
import TodoList from './TodoList';

function TodoFeature(props) {
  const listTodo = [
    {
      key: 1,
      id: '01',
      title: 'Working🙄',
      description:
        '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tempor sapien',
      status: 'doing'
    },
    {
      key: 2,
      id: '02',
      title: 'Study🎉',
      description:
        '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tempor sapien',
      status: 'doing'
    },
    {
      key: 3,
      id: '03',
      title: 'Play🎊',
      description:
        '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tempor sapien',
      status: 'doing'
    },
    {
      key: 4,
      id: '04',
      title: 'Coding🎊',
      description:
        '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tempor sapien',
      status: 'doing'
    }
  ];
  return (
    <div>
      <TodoList todoList={listTodo} />
    </div>
  );
}

export default TodoFeature;
