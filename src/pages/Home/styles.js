import styled, { css } from 'styled-components';

export const Container = styled.div`

    height: 100vh;
	justify-content: center;
    align-items: center;
    max-width: 100%;
	display: flex;
`

export const Field = styled.div`
    display: flex;
    align-items: center;

    & > div {
        flex-grow: 1;
    }

    & > button {
        align-self: flex-end;
        margin-left: 5px;
    }
`

export const ContentContainer = styled.div`
    width: 620px;
    max-width: 100%;
    padding: 50px;
   
    ${({ theme }) => css`
        background: ${theme.green};
        border-radius: ${theme.baseRadius};
    `}
    h1 {
        line-height: 1.7rem;
        text-align: center;
        margin-bottom: 20px;
        font-size: 1.5em;
    }
`