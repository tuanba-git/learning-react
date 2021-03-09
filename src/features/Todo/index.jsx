import React, { useState } from 'react';
import './styles.scss';
import TodoList from './TodoList';

const initTodoList = [
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
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');
  const handleTodoClick = (todo, index) => {
    // clone object
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'doing' ? 'done' : 'doing'
    };

    setTodoList(newTodoList);
  };

  const handledShowAll = () => {
    setFilteredStatus('all');
  };

  const handledShowDone = () => {
    setFilteredStatus('done');
  };
  const handledShowDoing = () => {
    setFilteredStatus('doing');
  };

  const todoListFilter = todoList.filter(
    todo => filteredStatus === 'all' || filteredStatus === todo.status
  );

  return (
    <div>
      <TodoList todoList={todoListFilter} onTodoCLick={handleTodoClick} />
      <div className="buttonGroup">
        <button className="buttonFilter" onClick={handledShowAll}>
          Show All
        </button>
        <button className="buttonFilter" onClick={handledShowDone}>
          Show done
        </button>
        <button className="buttonFilter" onClick={handledShowDoing}>
          Show Doing
        </button>
      </div>
    </div>
  );
}

export default TodoFeature;
