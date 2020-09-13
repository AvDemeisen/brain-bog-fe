import React from 'react'
import { Container, Main, Aside, Title, Tags, Tag, Button } from './component.styles'

const Thought = ({thought}) => (
    <Container>
        <Main>
        <Title>{thought.title}</Title>
            <p>{thought.copy}</p>
        </Main>
        <Aside>
            <Tags rows={thought.tags.length}>
            {thought.tags.map((tag) => 
                <Tag key={tag.name}>
                    <Button>
                    {tag.name}
                    </Button>
                </Tag>
            )}
            </Tags>
        </Aside>
    </Container>
)

export default Thought