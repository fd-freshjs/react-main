import React from 'react'

function ChangeCounter(props) {
    function increase () {
        props.changeState((state) => ({
            ...state,
            count: state.count + props.step,
        }));
    }

    function decrease () {
        // отнять шаг от счетчика
        props.changeState(state => ({ ...state, count: state.count - props.step }))
    }

    function switchMode () {
        // изменить режим
        props.changeState(state => ({ ...state, isIncrease: !state.isIncrease }));
    }

  return (
    <div>
        <button 
            onClick={props.isIncrease ? increase : decrease}
        >
            {props.isIncrease ? 'Добавить' : 'Отнять'}
        </button>

        <button onClick={switchMode}>Переключить режим</button>
    </div>
  )
}

export default ChangeCounter;
