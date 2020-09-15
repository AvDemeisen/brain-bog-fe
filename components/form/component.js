import React from 'react';
import useForm from '../../hooks/hooks';
import { ADD_THOUGHT, THOUGHTS_QUERY, TAGS_QUERY } from '../../queries/queries';
import { useMutation } from '@apollo/react-hooks';
import Input from '../input/component'
import Button from '../button/component'
import { Form } from './component.styles'

const AlbumForm = () => {
  const { values, handleChange, handleSubmit } = useForm(addAlbum);
  const [addThought] = useMutation(ADD_THOUGHT);

  function addAlbum() {

    addThought({
      variables: {
        name: values.title,
        copy: values.copy,
        genre: values.year,
        artistId: values.tagIds
      },
      refetchQueries: [{ query: THOUGHTS_QUERY }]
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Input type='text' change={handleChange} name='title' label='title' />
        <Input type='number' change={handleChange} name='year' label='year' />
        <Input type='text' change={handleChange} name='copy' label='copy' />
        <Button type='submit' label='add thought'/>
    </Form>
  )
}


export default AlbumForm;