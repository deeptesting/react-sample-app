type NameAction = {
    type: 'SetNAME',   payload: string
 }
 type SalaryAction = {
    type: 'SetSalary' | 'IncreamentSalary',   payload: number
 }
 
 type ApplicationAction = NameAction | SalaryAction 

 
 


//---State---Model-----
export interface StateCount {
    count: number;
    name: string;
}

//---To update the states these are the action-----------
export interface ActionCount {
    type: 'INCREASE' | 'DECREASE';
    payload: number;
}

//------To update this state we need to use this reducer function------
export function ReducerCount(state: StateCount, action: ActionCount) {

    switch (action.type) {
      case 'INCREASE':
        return {
          ...state,
          count: state.count + action.payload,
        };
      case 'DECREASE':
        return {
          ...state,
          count: state.count - action.payload,
        };
      default:
        return state;
    }
  }