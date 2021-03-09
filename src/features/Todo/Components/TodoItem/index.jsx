import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

TodoItem.propTypes = {
  key: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  status: PropTypes.string
};

TodoItem.deafaultProps = {
  key: 0,
  id: '00',
  title: 'title',
  description: 'description',
  status: 'status'
};

function TodoItem(props) {
  const { id, title, description } = props;
  return (
    <div class="card">
      <div class="content">
        <h1>{id}</h1>
        <h3>{title}</h3>
        <p>{description}</p>
        {/* <a href="#">Read more</a> */}
      </div>
    </div>
  );
}

export default TodoItem;
