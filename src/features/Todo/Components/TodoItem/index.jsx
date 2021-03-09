import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classNames from 'classnames';

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  status: PropTypes.string
};

TodoItem.deafaultProps = {
  id: '00',
  title: 'title',
  description: 'description',
  status: 'doing'
};

function TodoItem(props) {
  const { id, title, description, status } = props;
  return (
    <div className="card">
      <div className="content">
        <h1>{id}</h1>
        <h3>
          {title}
          {status === 'done' ? ' 🎉' : ' 🙄'}
        </h3>
        <p className={classNames({ completed: status === 'done' })}>
          {description}
        </p>
        {/* <a href="#">Read more</a> */}
      </div>
    </div>
  );
}

export default TodoItem;
