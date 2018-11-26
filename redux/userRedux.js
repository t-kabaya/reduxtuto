// redux.js
import {  
  combineReducers,
  createStore,
} from 'redux';

// actions.js
// actionはreduxの機能でなく、オブジェクトを作るための純粋なjsの関数です。
// 下のcloseKabayaの3行をchromeを開き、command + option + iでコンソールを開き貼り付けましょう。
// その後、console.log(deleteName())で、{type: "DELETE_NAME", name: ''}というオブジェクトが生成されるのを確かめましょう。
export const deleteName = () => ({  
  type: 'DELETE_NAME',
  name: ''
});

// 引数nameをとり、{type: "ADD_NAME", name: name}を返すjsの関数。
export const setName = name => ({  
  type: 'ADD_NAME',
  name: name,
});

INITIAL_STATE = {
  name: 'Nanasi'
}

// reducers.js
// reduxではglobal stateを巨大なjson(store)として管理します。stateの変更はjsonの書き換えによってのみ管理します。
// actionは純粋なjsのオブジェクトを作る関数であることを思い出してください。
// reducerはactionで生成されたオブジェクトを受け取り、巨大なjson(store)を書き換える関数です。
export default (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case 'ADD_NAME':
      return {...state, name: action.name}
    case 'DELETE_NAME':
      return {...state, name: ''}
    default:
      return state;
  }
}
