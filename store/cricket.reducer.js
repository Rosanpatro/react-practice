let iniState = {
  count : 0,
  player : 11
}

let cricketReducer = (state=iniState,action)=>{
if(action.type == "ONE"){
return {
  ...state,//spread operator
  count : state.count+1
}
}
if(action.type == "FOUR"){
  return {
    ...state,
    count : state.count+4
}
}
if(action.type == "SIX"){
  return {
    ...state,
    count : state.count+6
}
}
if(action.type == "OUT"){
  return {
    ...state,
    player : state.player-action.val
}
}
/*
switch(action.type)
{}
case 'SIX':
{
  return {
    ...state,
    count : state.count+6
  }
}
*/
return state;
}
export default cricketReducer;