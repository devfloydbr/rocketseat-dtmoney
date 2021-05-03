import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';



export function App() {
  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setNewTransactionModalOpen(true);
  }  

  function handleCloseTransactionModal(){
    setNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />
      <GlobalStyle />

      <NewTransactionModal 
        isOpen={newTransactionModalOpen} 
        onRequestClose={handleCloseTransactionModal}
      />
      
    </TransactionsProvider>
  );
}
