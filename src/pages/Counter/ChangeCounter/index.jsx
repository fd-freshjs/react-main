import React from 'react';
import PropTypes from 'prop-types';

function ChangeCounter (props) {
  function increase () {
    props.changeState(state => ({
      ...state,
      count: state.count + props.step,
    }));
  }

  function decrease () {
    // отнять шаг от счетчика
    props.changeState(state => ({
      ...state,
      count: state.count - props.step,
    }));
  }

  function switchMode () {
    // изменить режим
    props.changeState(state => ({ ...state, isIncrease: !state.isIncrease }));
  }

  return (
    <React.Fragment>
      <button onClick={props.isIncrease ? increase : decrease}>
        {props.isIncrease ? 'Добавить' : 'Отнять'}
      </button>

      <button onClick={switchMode}>Переключить режим</button>
    </React.Fragment>
  );
}

ChangeCounter.propTypes = {
  step: PropTypes.number.isRequired,
  changeState: PropTypes.func.isRequired,
};

ChangeCounter.defaultProps = {
  isIncrease: true,
  step: 1,
  changeState: () => {},
}

export default ChangeCounter;
