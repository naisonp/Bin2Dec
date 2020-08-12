import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid transparent;
    font-size: 18px;
    cursor: pointer;
    line-height: 1rem;
    ${({ theme }) => css`
        height:  ${theme.baseHeight};
        border-radius: ${theme.baseRadius};
        color: ${theme.dark}

        &:hover {
            border: 1px solid ${theme.orage};
            background: ${theme.orage};
            color: ${theme.light};
        }
    `}


`