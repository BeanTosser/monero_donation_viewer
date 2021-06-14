import "./css/AddressEntryField.css";

export default function (props) {
  let donationList = transactionListItem(props.donations);
  console.log("Donation list: " + donationList);
  return (
    <table className="donation_list_table">
      <tbody>{donationList}</tbody>
    </table>
  );
}

function transactionListItem(donations) {
  const maxLength = 10; //show at most 10 donations
  let length = donations.length - maxLength;
  donations = donations.slice(length);
  //props.txList
  //  .time
  //  .amount
  let donationListElements = donations.map((donation) => (
    <tr>
      <td>{donation[0].toString()}</td>
      <td>{donation[1]}</td>
    </tr>
  ));
  return donationListElements;
}
