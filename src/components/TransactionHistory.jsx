import TransactionItem from "./TransactionItem";

const TransactionHistory = ({TransItems}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
          </thead>
          <tbody>
          
          {TransItems.map(tItem=>{
                return <TransactionItem key={tItem.id} type={tItem.type} amount={tItem.amount} currency={tItem.currency}/>
            })}
          
          </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory