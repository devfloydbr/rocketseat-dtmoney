import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeSvg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface FormData {
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string;
}

export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
  const { createTransaction } = useTransactions();

  const [formData, setFormData] = useState<FormData>({} as FormData);

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    
    await createTransaction(formData);

    setFormData({} as FormData);

    onRequestClose();
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="modal-close"
      >
        <img src={closeSvg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>CADASTRAR TRANSAÇÃO</h2>

        <input 
          type="text"
          placeholder="Título"
          value={formData.title}
          onChange={e => setFormData({...formData, title: e.target.value })}
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={formData.amount}
          onChange={e => setFormData({...formData, amount: Number(e.target.value)})}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setFormData({...formData, type: 'deposit'})}
            isActive={formData.type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setFormData({...formData, type: 'withdraw'})}
            isActive={formData.type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeSvg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text"
          placeholder="Categoria"
          value={formData.category}
          onChange={e => setFormData({...formData, category: e.target.value})}
        />

        <button type="submit">CADASTRAR</button>
      </Container>
    </Modal>
  )
}
