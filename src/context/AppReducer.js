export default (state,Action)=>{
    switch(Action.type){
        case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== Action.payload)
      }
      case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [Action.payload, ...state.transactions]
      }
        default:
            return state;
    }
}