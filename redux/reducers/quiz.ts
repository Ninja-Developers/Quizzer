
interface InitState{
    name: string
}

const initialState: InitState = {
    name: ''
}

export default (state = initialState, action: any) => {
    switch(action.type){

        default:
            return state
    }
}