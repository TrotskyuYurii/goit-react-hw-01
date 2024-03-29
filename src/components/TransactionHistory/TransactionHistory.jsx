import TransactionItem from "../TransactionItem/TransactionItem";
import css from "../TransactionHistory/TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
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
          
          {items.map(tItem=>{
                return <TransactionItem key={tItem.id} type={tItem.type} amount={tItem.amount} currency={tItem.currency}/>
            })}
          
          </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory