import {COLLECT,UNCOLLECT} from "../constants"
import findIndex from "lodash/findIndex"

const defaultState=[] 

// const defaultState={collect:[]}    // 出过错误,导致state嵌套了两层collect 

export default function collect(state=defaultState,action){
  switch(action.type){
    case COLLECT:
      return [
        ...state,
        action.collect
      ];
    case UNCOLLECT:
      const currentIndex=findIndex(state,item =>item === action.id)
      return [
        ...state.slice(0,currentIndex),
        ...state.slice(currentIndex+1)
      ];
    default:
      return state;
  }
}