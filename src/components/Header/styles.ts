import styled from 'styled-components';

export const Container = styled.header`
  background: var(--purple);
`;

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--purple-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter linear 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
