import React, { useState } from 'react';
import './styles.scss';
import TodoList from './TodoList';

const initListTodo = [
  {
    id: '01',
    title: 'Working',
    description:
      '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tempor sapien',
    status: 'doing'
  },
  {
    id: '02',
    title: 'Study',
    description:
      '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tempor sapien',
    status: 'doing'
  },
  {
    id: '03',
    title: 'Play',
    description:
      '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tempor sapien',
    status: 'doing'
  },
  {
    id: '04',
    title: 'Coding',
    description:
      '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tempor sapien',
    status: 'doing'
  }
];

function TodoFeature(props) {
  const [todoList, setTodoList] = useState(initListTodo);

  const handleTodoClick = (todo, index) => {
    // clone object
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'doing' ? 'done' : 'doing'
    };

    setTodoList(newTodoList);
  };

  return (
    <div>
      <TodoList todoList={todoList} onTodoCLick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
