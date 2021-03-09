import React, { useState } from 'react';
import './styles.scss';
import TodoList from './TodoList';
import initTodoList from './mock/todoData';

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
