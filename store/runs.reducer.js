let iniRuns = {
  count : 0
}
let runReducer = (state=iniRuns,action)=>{
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
return state;
}

export default runReducer;