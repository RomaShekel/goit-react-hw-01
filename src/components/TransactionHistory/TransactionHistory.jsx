import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({items}) {
    return(
<table className={css.table}>
  <thead className={css.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    { items.map((item) => {
        return(
    <tr className={css.tr} key={item.id}>
      <td className={css.td}>{capitalizeFirstLetter(item.type)}</td>
      <td className={css.td}>{item.amount}</td>
      <td className={css.td}>{item.currency}</td>
    </tr>
        )
        })}
  </tbody>
</table>

    )
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}