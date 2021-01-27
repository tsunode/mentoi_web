import styled, { css } from 'styled-components';

interface ContainerProps {
  visible?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: transparent;
  display: flex;
  align-items: center;

  border: 0;

  ${({ visible }) =>
    !visible &&
    visible !== undefined &&
    css`
      display: none;
    `}

  > svg {
    color: var(--color-text);
    width: 36px;
    height: 22px;
  }
`;