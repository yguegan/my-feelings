import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OptionalComment from './OptionalComment';
import { act } from 'react-dom/test-utils';

const setValue = () => {};

const navigation = {
    next: () => {}
};

const onSubmit = () => {}

test('renders a title element in the page', () => {
  render(<OptionalComment setValue={setValue} navigation={navigation} onSubmit={onSubmit} />);
  const titleElements = document.getElementsByTagName("h1");
  expect(titleElements.length).toEqual(1);
});

test('renders a title element in the page with "Do you have something specific to say today ?"', () => {
    const { getByText } = render(<OptionalComment setValue={setValue} navigation={navigation} onSubmit={onSubmit} />);
    const titleElement = getByText("Do you have something specific to say today ?");
    expect(titleElement).toBeInTheDocument();
});

test('renders 1 element with the name additionalComment in the page', () => {
    render(<OptionalComment setValue={setValue} navigation={navigation} onSubmit={onSubmit} />);
    const selectedMoodElements = document.getElementsByName("additionalComment");
    expect(selectedMoodElements.length).toEqual(1);
});

test('should call setForm method when modifying the value of the element additionalComment', (done) => {
    const handlerSetValue = (event) => {
        done();
    };
    render(<OptionalComment setValue={handlerSetValue} navigation={navigation} onSubmit={onSubmit} />);
    const textAreaElement = document.getElementsByName("additionalComment");
    act(() => {
        fireEvent.change(textAreaElement[0], {target: {value: 'test', name: 'additionalComment'}})
    })
});

test('renders one button in the page', () => {
    render(<OptionalComment setValue={setValue} navigation={navigation} onSubmit={onSubmit} />);
    const buttonElements = document.getElementsByTagName("Button");
    expect(buttonElements.length).toEqual(1);
});

test('renders the button submit in the page', () => {
    const {getByText} = render(<OptionalComment setValue={setValue} navigation={navigation} onSubmit={onSubmit} />);
    const buttonNode = getByText("Submit");
    expect(buttonNode).not.toEqual(undefined);
});

test('should call onSubmit method when clicking on the submit button', (done) => {
    const handlerForClick = () => {
        done();
    };
    const {getByText} = render(<OptionalComment setValue={setValue} navigation={navigation} onSubmit={handlerForClick} />);
    const buttonNode = getByText("Submit");
    act(() => {
        fireEvent.click(buttonNode)
    })
});