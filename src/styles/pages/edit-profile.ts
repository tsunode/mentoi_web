import styled from 'styled-components';
import { Main as MainDefault } from '@/shared/components/Main/styles';

export const Main = styled(MainDefault)`
  margin-top: -10px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 5.1rem);

  section {
    margin-left: 1.5rem;
    padding: 0 5rem;
    flex: 1;
    max-width: 80rem;
  }

  @media (max-width: 425px) {
    section {
      margin-left: 0;
    }
  }
`;
