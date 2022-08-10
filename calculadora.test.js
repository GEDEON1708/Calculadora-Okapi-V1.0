/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import  ReactDOM  from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculadora from './calculadora';

describe('Calculadora', () => {

  test('deve renderizar o componente sem erros', () => {
     const div = document.createElement('div');
     // eslint-disable-next-line no-undef
     ReactDOM.render(<Calculadora />, div);
     // eslint-disable-next-line no-undef
     ReactDOM.unmountComponentAtNode(div);
    });

    it('deve limpar o campo de números', () => {
      const { getByTestId, getByText } = render(<Calculadora />);
      fireEvent.click(getByText('2'));
      fireEvent.click(getByText('C'));
      expect(getByTestId('txtNumeros')).toHaveValue('0');
    });

    it('deve somar 2 + 3 e obter 5', () => {
      const {getByTestId, getByText} = render(<Calculadora />);
      fireEvent.click(getByText('2'));
      fireEvent.click(getByText('+'));
      fireEvent.click(getByText('3'));
      fireEvent.click(getByText('='));
      expect(getByTestId('txtNumeros')).toHaveValue('5');
    });

    it('deve subtrair 5 - 3 e obter 2', () => {
      const {getByTestId, getByText} = render(<Calculadora />);
      fireEvent.click(getByText('5'));
      fireEvent.click(getByText('-'));
      fireEvent.click(getByText('3'));
      fireEvent.click(getByText('='));
      expect(getByTestId('txtNumeros')).toHaveValue('2');
    });

    it('deve multiplicicar 2 * 3 e obter 6', () => {
      const {getByTestId, getByText} = render(<Calculadora />);
      fireEvent.click(getByText('2'));
      fireEvent.click(getByText('*'));
      fireEvent.click(getByText('3'));
      fireEvent.click(getByText('='));
      expect(getByTestId('txtNumeros')).toHaveValue('6');
    });

    it('deve dividir 8 / 4 e obter 2', () => {
      const {getByTestId, getByText} = render(<Calculadora />);
      fireEvent.click(getByText('8'));
      fireEvent.click(getByText('/'));
      fireEvent.click(getByText('4'));
      fireEvent.click(getByText('='));
      expect(getByTestId('txtNumeros')).toHaveValue('2');
    });

    it('deve somar 2.5 + 3 e obter 5.5', () => {
      const {getByTestId, getByText} = render(<Calculadora />);
      fireEvent.click(getByText('2'));
      fireEvent.click(getByText('.'));
      fireEvent.click(getByText('5'));
      fireEvent.click(getByText('+'));
      fireEvent.click(getByText('3'));
      fireEvent.click(getByText('='));
      expect(getByTestId('txtNumeros')).toHaveValue('5.5');
    });

    

});