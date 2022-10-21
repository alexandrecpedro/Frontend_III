import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { formatMoney, dateFormat } from './hooks/useUtils';
import api from './services/api';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: 500,
    height: 400,
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    background: "rgba(0,0,0,0.6)",
  },
}

function App() {

  const [accounts, setAccounts] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const getAccounts = async () => {
    try {
      const { data } = await api.get('/account');
      setAccounts(data.accounts);
    } catch (error) {
      alert('Error when find accounts');
    }
  }

  useEffect(() => {
    getAccounts();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <h1>Hello World</h1>
      {
        accounts.map((account) => (
          <div key={account.id}>
            <p>Client: {account.client}</p>
            <p>Balance: {formatMoney(account.balance)}</p>
            <p>Date: {dateFormat(account.date)}</p>
          </div>
        ))
      }
      <button onClick={() => setVisibleModal(true)}>New Register</button>
      <Modal 
        style={customStyles} 
        isOpen={visibleModal} 
        onRequestClose={() => setVisibleModal(false)} 
      >
        <h1>Register new account</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder='Email' />
          <input placeholder='Password' />
          <input placeholder='Telephone' />

          <button type='submit'>Save</button>
          <button type='button' onClick={() => setVisibleModal(false)}>Cancel</button>
        </form>
      </Modal>
    </>
  );
}

export default App;
