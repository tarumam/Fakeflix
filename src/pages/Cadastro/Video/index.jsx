import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Page from '../../../components/Page';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/video';
import categoryRepository from '../../../repositories/category';

const CadastroVideo = () => {
  const valoresIniciais = {
    title: '',
    url: '',
    category: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  const categoryTitles = categories.map((c) => c.title);

  useEffect(() => {
    categoryRepository.getAll().then((result) => {
      setCategories([...result]);
    }).catch((err) => console.log(err.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const category = categories.find((categoria) => categoria.title === values.category);
    videoRepository.create({
      title: values.title,
      url: values.url,
      categoryId: category.id,
    }).then(() => {
      console.log('cadastrado com sucesso');
      history.push('/home');
    });
  };

  return (
    <Page>
      <h1>
        Cadastro de Vídeo:
        {values.name}
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            label="Titulo do vídeo"
            name="title"
            type="text"
            value={values.title}
            onChange={handleChange}
          />
          <FormField
            label="URL"
            name="url"
            type="text"
            value={values.url}
            onChange={handleChange}
          />
          <FormField
            label="Categoria"
            name="category"
            type="text"
            value={values.category}
            onChange={handleChange}
            suggestions={categoryTitles}
          />
        </div>

        <Button>Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </Page>
  );
};
export default CadastroVideo;
