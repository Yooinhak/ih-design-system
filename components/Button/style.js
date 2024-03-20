import styled, { css } from 'styled-components';

const buttonSizeStyles = {
  s: css`
    height: 32px;
    padding: 4px 16px;
    font-size: 14px;
  `,
  m: css`
    height: 40px;
    padding: 8px 20px;
    font-size: 16px;
  `,
  l: css`
    height: 48px;
    padding: 12px 24px;
    font-size: 16px;
  `,
};

export const getButtonSizeStyles = sizeType => {
  return buttonSizeStyles[sizeType];
};

export const StyledButton = styled.button`
  width: ${({ $width }) =>
    typeof $width === 'number' ? `${$width}px` : $width};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors.text.gray75};
  background-color: ${({ theme }) => theme.colors.c_background.primary900};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text.gray75};
    background-color: ${({ theme }) => theme.colors.c_background.primary1000};
  }

  &:active {
    color: ${({ theme }) => theme.colors.text.gray75};
    background-color: ${({ theme }) => theme.colors.c_background.primary1100};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.text.gray400};
    background-color: ${({ theme }) => theme.colors.c_background.gray200};
  }

  ${({ size }) => getButtonSizeStyles(size)};

  ${({ outline }) =>
    outline &&
    css`
      color: ${({ theme }) => theme.colors.text.gray800};
      border: 1px solid ${({ theme }) => theme.colors.border.gray600};
      background-color: ${({ theme }) => theme.colors.c_background.gray75};

      &:hover {
        color: ${({ theme }) => theme.colors.text.gray800};
        border: 1px solid ${({ theme }) => theme.colors.border.gray700};
        background-color: ${({ theme }) => theme.colors.c_background.gray75};
      }

      &:active {
        color: ${({ theme }) => theme.colors.text.gray900};
        border: 1px solid ${({ theme }) => theme.colors.border.gray700};
        background-color: ${({ theme }) => theme.colors.c_background.gray100};
      }

      &:disabled {
        color: ${({ theme }) => theme.colors.text.gray400};
        border: 1px solid ${({ theme }) => theme.colors.border.gray300};
        background-color: ${({ theme }) => theme.colors.c_background.gray75};
      }
    `};
  ${({ error, outline }) =>
    error && !outline
      ? css`
          background-color: ${({ theme }) => theme.colors.semantic.red};
          pointer-events: none;
        `
      : error &&
        outline &&
        css`
          border: 1px solid ${({ theme }) => theme.colors.semantic.red};
          color: ${({ theme }) => theme.colors.semantic.red};
          background-color: ${({ theme }) => theme.colors.background.gray75};
          pointer-events: none;
        `};
`;

export const LabelSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  ${({ $loading }) =>
    $loading &&
    css`
      visibility: hidden;
    `};
`;
