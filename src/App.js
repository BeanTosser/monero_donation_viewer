import "./styles.css";
import AddressEntryField from "./Components/AddressEntryField.js";
import TransactionList from "./Components/TransactionList.js";
export default function App() {
  return (
    <div className="App">
      <h1>Monero donation viewer</h1>
      <br />
      <br />
      <AddressEntryField />
      <TransactionList />
    </div>
  );
}
