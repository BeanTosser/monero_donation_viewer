import "./styles.css";
import AddressEntryField from "./Components/AddressEntryField.js";

export default function App() {
  return (
    <div className="App">
      <h1>Monero donation viewer</h1>
      <br />
      <br />
      <AddressEntryField />
    </div>
  );
}
