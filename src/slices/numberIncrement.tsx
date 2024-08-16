import { createSlice } from "@reduxjs/toolkit";



interface hello{
    number:number
}
const initialState:hello={
    number:0
}

export const numberIncrement=createSlice({
    name:"store",
    initialState,
    reducers:{
        setNumberd:(state,action)=>{
            let val=action.payload
            console.log(val)
            let some;
            if(val==true)
            {
                some=state.number+1
            }
            else{
                if(state.number<=0)
                {
                    some=state.number
                }
                else{
                    some=state.number-1
                }
            }

            state.number=some
        }
    }
})

export const {setNumberd}=numberIncrement.actions