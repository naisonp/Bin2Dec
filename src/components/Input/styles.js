import styled, { css } from 'styled-components';

export const Container = styled.div`
    input {
        ${({ theme, disabled }) => css`
        width: 100%;
        height: ${theme.baseHeight};
        border: 1px solid transparent;
        border-radius: ${theme.baseRadius};
        margin-bottom: 10px;
        margin-top: 5px;
        padding: 10px;
        outline: none;

        &:hover {
          border-color: ${disabled ? theme.disabled : theme.orage};
        }

        &[disabled] {
          color: ${theme.light}
        }
      `}
    }
`