import "./styles.css";
import AddressEntryField from "./Components/AddressEntryField.js";
import TransactionList from "./Components/TransactionList.js";
import WalletInfo from "./Components/WalletInfo.js";

export default function App() {
  const walletBalance = 3.9928;

  return (
    <div className="App">
      <h1>Monero donation viewer</h1>
      <br />
      <br />
      <AddressEntryField />
      <WalletInfo
        donationTotal={3.9382}
        numDonations={392}
        largestDonation={1.1}
      />
      <TransactionList />
    </div>
  );
}
