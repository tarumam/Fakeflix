import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../../components/Page';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoryRepository from '../../../repositories/category';

const CadastroCategoria = () => {
  const valoresIniciais = {
    name: '',
    description: '',
    color: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos().then((result) => {
      setCategory([...result]);
    }).catch((err) => console.log(err.message));
  }, []);

  const handleSubmit = (form) => {
    form.preventDefault();
    const newCat = { title: values.name, id: category.length + 1, color: category.cor };
    setCategory([...category, newCat]);
    clearForm();
  };

  return (
    <Page>
      <h1>
        Cadastro de categoria:
        {values.name}
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            label="Nome"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <FormField
            label="Descrição"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <FormField
            label="Cor"
            name="color"
            type="color"
            value={values.color}
            onChange={handleChange}
          />
        </div>

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {category.map((categoria) => (
          <li key={`${categoria.id}_${categoria.name}`}>
            {categoria.title}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </Page>
  );
};
export default CadastroCategoria;
