//using multiple reducer
let iniPlayers = {
  player : 11
}
let playersReducer = (state=iniPlayers,action)=>{
if(action.type == "OUT"){
  return {
    ...state,
    player : state.player-action.val
}
}
return state;
}

export default playersReducer;