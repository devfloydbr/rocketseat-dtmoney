import logoSvg from '../../assets/logo.svg';
import { Container, Wrapper } from './styles';

interface Props {
  onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: Props) {
  return (
    <Container>
      <Wrapper>
        <img src={logoSvg} alt="dtmoney"/>
        <button type="button" onClick={onOpenTransactionModal}>
          NOVA TRANSAÇÃO
        </button>
        
      </Wrapper>      
    </Container>
  );
}
