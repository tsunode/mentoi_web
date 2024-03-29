import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { Variant } from '../variant';

interface ContainerProps {
  variant?: Variant;
  color?: String;
  selected?: boolean;
}

export const ButtonTypeVariations = {
  primary: css`
    background: var(--color-primary);
    color: var(--color-text-in-primary);
    border: 0.2rem solid var(--color-primary);

    &:hover {
      background: var(--color-primary-light);
      border: 0.2rem solid var(--color-primary);
      color: var(--color-primary);
    }
  `,
  secondary: css`
    background: var(--color-secondary);
    color: var(--color-text-in-primary);
    border: 0.1rem solid;
  `,
  tertiary: css`
    background: var(--color-background);
    color: var(--color-primary);
    border: 0.1rem solid var(--color-primary);
  `,
  error: css`
    background: var(--color-red);
    color: var(--color-text-in-primary);
    border: 0.1rem solid;
  `,
  outlinePrimary: css`
    background: none;
    color: var(--color-primary);
    border: 0.1rem solid var(--color-primary);

    &:hover {
      background: var(--color-primary-light);
      border: 0.1rem solid var(--color-primary);
      color: var(--color-primary);
    }
  `,
  outlineError: css`
    background: none;
    color: var(--color-red);
    border: 0.1rem solid var(--color-red);

    &:hover {
      background: var(--color-red);
      color: var(--color-text-in-primary);
    }
  `,
  inlinePrimary: css`
    background: none;
    color: var(--color-primary);
    border: none;
  `,
  inlineSecondary: css`
    background: none;
    color: var(--color-secondary);
    border: none;
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ variant }) => ButtonTypeVariations[variant || 'primary']}

  ${({ color }) =>
    color &&
    css`
      background: none;
      color: ${color};
      border: 0.1rem solid ${color};

      &:hover {
        background: ${transparentize(0.8, color)};
        border: 0.1rem solid ${color};
        color: ${color};
      }
    `}

  ${({ selected, color }) =>
    selected &&
    color &&
    css`
      background: ${color};
      color: var(--color-text-in-primary);
      border: 0.1rem solid ${color};

      &:hover {
        background: ${transparentize(0.8, color)};
        border: 0.1rem solid ${color};
        color: ${color};
      }
    `}

  outline: none;
  text-decoration: none;
  border-radius: 1.5rem;
  padding: 0.2rem 1.5rem;
  transition: background-color 0.2s linear;
`;
