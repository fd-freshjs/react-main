import { langEnum } from '../../enums';

export const langState = langEnum.en;

const langReducer = (oldState = langState, action) => {
    switch (action.type) {
        case 'nextLang':
            return oldState === langEnum.ru ? langEnum.en : langEnum.ru;
    
        default:
            return oldState;
    }
}

export default langReducer;
