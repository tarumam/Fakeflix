import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../../components/Page';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const valoresIniciais = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [category, setCategory] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP).then(async (resp) => {
      const result = await resp.json();
      setCategory([...result]);
    });
  }, []);

  const handleChange = (field) => {
    const { value } = field.target;
    const key = field.target.getAttribute('name');

    setValues({ ...values, [key]: value });
  };

  const handleSubmit = (form) => {
    form.preventDefault();
    setCategory([...category, values]);
    setValues(valoresIniciais);
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
          <li key={categoria.id}>
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
