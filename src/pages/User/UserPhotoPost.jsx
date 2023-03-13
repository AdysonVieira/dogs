import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PHOTO_POST } from '../../api';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Error from '../../components/Helper/Error'
import styles from './UserPhotoPost.module.css';

const UserPhotoPost = () => {
  const name = useForm();
  const age = useForm('number');
  const weight = useForm('number');
  const [photo, setPhoto] = React.useState({});
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('nome', name.value);
    formData.append('idade', age.value);
    formData.append('peso', weight.value);
    formData.append('foto', photo.raw);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  };

  const handleChange = (event) => {
    setPhoto({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  };

  return (
    <section className={`${styles.photoPost} fadeInLeft`}>
      <form onSubmit={handleSubmit}>
        <Error error={error}/>
        <Input
          label='Nome'
          type='text'
          id='nome'
          name='nome'
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
          error={name.error}
          />
        <Input
          label='Idade'
          type='number'
          id='age'
          name='age'
          value={age.value}
          onChange={age.onChange}
          onBlur={age.onBlur}
          error={age.error}
          />
        <Input
          label='Peso'
          type='number'
          id='peso'
          name='peso'
          value={weight.value}
          onChange={weight.onChange}
          onBlur={weight.onBlur}
          error={weight.error}
        />
        <input 
          className={styles.file}
          type='file' 
          id='img'
          name='img'
          onChange={handleChange}
        />
        {loading 
          ? <Button text='Enviando...' disabled />
          : <Button text='Enviar' />
        }
        {photo && <img src={photo.raw} />}
      </form>
      <div>
        {photo.preview &&
          <div 
            className={styles.preview}
            style={{backgroundImage: `url(${photo.preview})`}}>
          </div>
        }
      </div>
    </section>
  )
}

export default UserPhotoPost