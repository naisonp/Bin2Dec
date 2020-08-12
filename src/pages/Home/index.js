import React, { useState } from 'react';

import { Container, Field, ContentContainer } from './styles';

import { Message, Input, Button } from '../../components'

function Home() {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlerSubmit = e => {
        e.preventDefault();

        if (binary.match(/^[0-1]+$/g) === null) {
            setErrorMessage('Digite números binários 0 ou 1.');
            return
        }

        setErrorMessage('');

        const reversedBinaryText = binary.split('').map(Number).reverse();

        const result = reversedBinaryText.reduce(
            (accumulator, currentValue, idx) =>
                accumulator + currentValue * Math.pow(2, idx)
        )
        setDecimal(result);
    }


    return (
        <Container>
            <ContentContainer>
                <h1>Conversor Binário para Decimal</h1>
                <form onSubmit={handlerSubmit}>
                    <Field>
                        <Input
                            label='Binário'
                            type='text'
                            name='binary'
                            id='binary'
                            maxLength='8'
                            placeholder='Digite número binário'
                            value={binary}
                            onChange={setBinary}
                        />
                         
                        <Button type='submit' text='Converter' />
                    </Field>
                    {errorMessage && <Message type={'error'} message={errorMessage} />}
                    <Input
                        label='Decimal'
                        type='text'
                        name='decimal'
                        id='decimal'
                        value={decimal}
                        disabled={true}
                    />

                </form>
            </ContentContainer>
        </Container>
    )
}

export default Home;