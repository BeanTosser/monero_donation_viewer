import "./css/AddressEntryField.css";

export default function (props) {
  let donationList = transactionListItem(props.donations);
  return (
    <div className="donation_list">
      <table>{donationList}</table>
    </div>
  );
}

function transactionListItem(donations) {
  console.log("Donations: " + donations);
  const maxLength = 10; //show at most 10 donations
  //props.txList
  //  .time
  //  .amount
  let donationListElements = [];
  donationListElements = donations.map((donation) => (
    <tr>
      <td>{donation[0]}</td>
      <td>{donation[1]}</td>
    </tr>
  ));
  console.log("donationList elements: " + donationListElements);
}
