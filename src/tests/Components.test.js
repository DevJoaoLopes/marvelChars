import React from 'react';
import { render, screen } from '@testing-library/react';
import CardSeries from '../components/CardSeries';
import Pagination from '../components/Pagination/Pagination';
import Spinner from '../components/Spinner';


describe('Components Tests', () => {

  test('should contain Card element if loading false',  () => {
        
    const hasLoading = () => false;
    const renderCards = () => hasLoading() ?  null : (<CardSeries />);
        
    render(renderCards());

    const card = screen.getByTestId('card-series');
    expect(card).toBeInTheDocument();
  });

  test('should contain Title in Card element if loading false',  () => {
        
    const hasLoading = () => false;
    const renderCards = () => hasLoading() ?  null : (<CardSeries />);
        
    render(renderCards());

    const card = screen.getByTestId('title-card');
    expect(card).toBeInTheDocument();
  });

  test('should contain Spinner Element if loading true', () => {
    const hasLoading = () => true;
    const renderCards = () => hasLoading() ?  (<Spinner />) : null;
        
    render(renderCards());

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  test('should contain pagination', () => {
    render(<Pagination />);

    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeInTheDocument();
  });

  test('should contain button preview in Pagination', () => {
    render(<Pagination />);

    const previewButton = screen.getAllByRole('button');
    expect(previewButton[0]).toBeInTheDocument();
  });

  test('should contain button next in Pagination', () => {
    render(<Pagination />);

    const nextButton = screen.getAllByRole('button');
    expect(nextButton[1]).toBeInTheDocument();
  });

  test('should contain text "anterior" in Pagination button preview', () => {
    render(<Pagination />);

    const previewButton = screen.getAllByRole('button');
    expect(previewButton[0]).toHaveTextContent('Anterior');
  });

  test('should contain text "proxima" in Pagination button next', () => {
    render(<Pagination />);

    const nextButton = screen.getAllByRole('button');
    expect(nextButton[1]).toHaveTextContent('Próxima');
  });


  test('should contain disabled property in button preview Pagination',  () => {
        
    render(<Pagination />);

    const previewButton = screen.getAllByRole('button');
    expect(previewButton[0]).toHaveProperty('disabled');
  });


});