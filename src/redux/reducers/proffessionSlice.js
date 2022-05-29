export const proffesionSlice = (state = "", action)=>{
    
    switch (action.type){
        case "edit-pofession":
            return action.payload;
        default:
            return state;
    }
}