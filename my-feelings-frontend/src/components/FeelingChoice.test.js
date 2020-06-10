import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FeelingChoice from './FeelingChoice';
import { act } from 'react-dom/test-utils';

const navigation = {
    next: () => {}
};

const formData = {
    selectedFeelings: []
}

test('renders a title element in the page', () => {
  render(<FeelingChoice formData={formData} navigation={navigation}/>);
  const titleElements = document.getElementsByTagName("h1");
  expect(titleElements.length).toEqual(1);
});

test('renders a title element in the page with "How do you feel today ?"', () => {
    const { getByText } = render(<FeelingChoice formData={formData} navigation={navigation}/>);
    const titleElement = getByText("How do you feel today ?");
    expect(titleElement).toBeInTheDocument();
});

test('renders an elements with the value Depressed in the page', () => {
    const {getByText} = render(<FeelingChoice formData={formData} navigation={navigation}/>);
    const selectedFeelingsElementDepressed = getByText("Depressed");
    expect(selectedFeelingsElementDepressed).toBeInTheDocument();
});

test('renders an elements with the value Optimistic in the page', () => {
    const {getByText} = render(<FeelingChoice formData={formData} navigation={navigation}/>);
    const selectedFeelingsElementOptimistic = getByText("Optimistic");
    expect(selectedFeelingsElementOptimistic).toBeInTheDocument();
});

test('renders an elements with the value Bored in the page', () => {
    const {getByText} = render(<FeelingChoice formData={formData} navigation={navigation}/>);
    const selectedFeelingsElementBored = getByText("Bored");
    expect(selectedFeelingsElementBored).toBeInTheDocument();
});

test('renders an elements with the value Happy in the page', () => {
    const {getByText} = render(<FeelingChoice formData={formData} navigation={navigation}/>);
    const selectedFeelingsElementHappy = getByText("Happy");
    expect(selectedFeelingsElementHappy).toBeInTheDocument();
});

test('should add Happy in the selectedFeelings array when pressing one of the selectedFeelings button and the value is not in the array', () => {
    const {getByText} = render(<FeelingChoice formData={formData} navigation={navigation}/>);
    const selectedFeelingsElementHappy = getByText("Happy");
    act(() => {
        fireEvent.click(selectedFeelingsElementHappy)
    })
    expect(formData.selectedFeelings.indexOf("Happy")).toEqual(0);
});

test('should remove Happy in the selectedFeelings array when pressing one of the selectedFeelings button and the value is in the array', () => {
    const {getByText} = render(<FeelingChoice formData={formData} navigation={navigation}/>);
    const selectedFeelingsElementHappy = getByText("Happy");
    act(() => {
        fireEvent.click(selectedFeelingsElementHappy)
    })

    act(() => {
        fireEvent.click(selectedFeelingsElementHappy)
    })

    expect(formData.selectedFeelings.indexOf("Happy")).toEqual(-1);
});

test('renders the button next in the page', () => {
    render(<FeelingChoice formData={formData} navigation={navigation}/>);
    const buttonElements = document.getElementsByTagName("Button");
    expect(buttonElements.length).toEqual(1);
});

test('should call next method when clicking on the next button', (done) => {
    const handlerForClick = {
        next: () => {
            done();
        }
    };
    const {getByText} = render(<FeelingChoice formData={formData} navigation={handlerForClick}/>);
    const buttonNode = getByText("Next");
    act(() => {
        fireEvent.click(buttonNode)
    })
});