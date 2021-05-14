import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);
    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Julio Vieira"
                    date="01/12/2021"
                    content="Hoje é meu aniversário!"
                />

                <ChannelMessage 
                    author="João Carlos"
                    date="01/12/2021"
                    content={
                        <>
                            <Mention>@Julio Vieira</Mention>, Parabéns!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #Chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;