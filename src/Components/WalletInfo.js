export default function WalletInfo(props) {
  return (
    // Donation total
    // # of donations
    <div>
      <table>
        <tbody>
          <tr>
            <td>Donation total: </td>
            <td>{props.donationTotal}</td>
          </tr>
          <tr>
            <td>Number of donations: </td>
            <td>{props.numDonations}</td>
          </tr>
          <tr>
            <td>Average donation: </td>
            <td>{props.donationTotal / props.numDonations}</td>
          </tr>
          <tr>
            <td>Largest donation: </td>
            <td>{props.largestDonation}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
