import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--color-background);
  box-shadow: 0px -0.1rem 0.3rem 0.2rem rgba(0, 0, 0, 0.15);

  position: sticky;
  top: 0;

  > div {
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 1rem auto;
    padding: 0.8rem 0.5rem;

    div {
      display: flex;
      justify-content: space-between;

      a {
        margin: 0 0.8rem;
        outline: none;
        text-decoration: none;
        border: 0.1rem solid;
        border-radius: 1.5rem;
        padding: 0.5rem 1.5rem;
      }

      a:nth-child(1) {
        color: var(--color-text-complement);
      }

      a:nth-child(2) {
        background: var(--color-primary);
        color: var(--color-text-in-primary);
      }

      @media (max-width: 425px) {
        a,
        button {
          border: none;
          padding: 0;
          background: none;
          color: var(--color-primary);
          font-weight: 700;
        }
      }
    }
  }
`;
