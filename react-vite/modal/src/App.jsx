import { useState } from "react";
import "./App.css";
import Modal from "./components/modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <div>
        <button onClick={() => setOpenModal(true)}>Abrir o modal</button>
      </div>
      <Modal isOpen={openModal} setIsOpenModal={() => setOpenModal(!openModal)}>
        {/* children */}
        <h2>TESTE MODAL</h2>
      </Modal>
    </div>
  );
}

export default App;
