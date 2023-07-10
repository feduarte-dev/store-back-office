import { useState } from 'react';
import { ProductType } from '../types';
import Product from './Product';
import '../styles/RegisterProduct.css';

type Props = {
  handleSubmit: (productInfo: ProductType) => void
};

const initialState = {
  name: '',
  price: 0,
  description: '',
  image: '',
  tags: '',
};

export default function RegisterProduct(props: Props) {
  const [productInfo, setproductInfo] = useState(initialState);
  const { name, price, description, image, tags } = productInfo;
  const { handleSubmit } = props;

  const resetValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    target.value = '';
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = target;

    setproductInfo((NEWproductInfo) => ({
      ...NEWproductInfo,
      [id]: value,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(productInfo);
    setproductInfo(initialState);
  };

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ onSubmit }>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              id="name"
              required
              value={ name }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              required
              value={ description }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="price">
            Preço
            <input
              type="number"
              id="price"
              required
              value={ price }
              onFocus={ resetValue }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              id="image"
              value={ image }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="tags">
            Tags
            <input
              type="text"
              id="tags"
              value={ tags }
              onChange={ handleChange }
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <Product productInfo={ productInfo } />
      </div>
    </main>
  );
}
