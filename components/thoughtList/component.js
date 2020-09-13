import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { THOUGHTS_QUERY } from '../../queries/queries'
import { List } from './component.styles';
import Thought from '../thought/component'

const ThoughtList = () => {
  const { loading, error, data } = useQuery(THOUGHTS_QUERY);
  return loading ? <Loading /> : error ? <Error /> : 
    <List> {data.thoughts.map((thought) => 
      <Thought thought={thought} key={thought.id} />)}
    </List>
}

const Loading = () => <div>loading</div>
const Error = () => <div>error</div>


export default ThoughtList