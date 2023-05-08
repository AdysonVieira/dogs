import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Error from '../../components/Helper/Error'
import styles from './UserPhotoPost.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { photoPost } from '../../store/reducers/photoPost';

const UserPhotoPost = () => {
  const name = useForm();
  const age = useForm('number');
  const weight = useForm('number');

  const [photo, setPhoto] = React.useState({});
  
  const navigate = useNavigate();
  
  const { error, data, loading } = useSelector((state) => state.photoPost);
  const { token } = useSelector((state) => state.token.data)
  const dispatch = useDispatch();


  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', photo.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);

    dispatch(photoPost({formData, token}));
  };

  const handleChange = ({ target }) => {
    setPhoto({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
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