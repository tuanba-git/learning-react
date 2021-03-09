import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classNames from 'classnames';
import VanillaTilt from 'effects/cardEffect';

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

  VanillaTilt.init(document.querySelectorAll('.card'), {
    max: 25,
    speed: 400
  });

  return (
    <div className={classNames(['card', { carddone: status === 'done' }])}>
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
