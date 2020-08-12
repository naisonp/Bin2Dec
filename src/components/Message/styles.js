import styled, { css } from 'styled-components';

export const ContainerMessage = styled.span`

    &.error {
        ${({ theme }) => css`
            color:  ${theme.error};
        `}
    }

    &.success {
        ${({ theme }) => css`
            color: ${theme.success}
        `}
    }

    &.warning {
        ${({ theme }) => css`
            color: ${theme.warning}
        `}
    }
`