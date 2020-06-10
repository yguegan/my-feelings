import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MoodChoice from './MoodChoice';
import { act } from 'react-dom/test-utils';

const setForm = () => {};

const navigation = {
    next: () => {}
};

test('renders a title element in the page', () => {
  render(<MoodChoice setForm={setForm} navigation={navigation}/>);
  const titleElements = document.getElementsByTagName("h1");
  expect(titleElements.length).toEqual(1);
});

test('renders a title element in the page with "How is your mood today ?"', () => {
    const { getByText } = render(<MoodChoice setForm={setForm} navigation={navigation}/>);
    const titleElement = getByText("How is your mood today ?");
    expect(titleElement).toBeInTheDocument();
});

test('renders 7 elements with the name selectedMood in the page', () => {
    render(<MoodChoice setForm={setForm} navigation={navigation}/>);
    const selectedMoodElements = document.getElementsByName("selectedMood");
    expect(selectedMoodElements.length).toEqual(7);
});

test('should call setForm method when pressing one of the selectedMood button', (done) => {
    const handlerSetForm = (event) => {
        done();
    };
    render(<MoodChoice setForm={handlerSetForm} navigation={navigation}/>);
    const buttonNode = document.getElementsByName("selectedMood");
    act(() => {
        fireEvent.click(buttonNode[2])
    })
});

test('renders the button next in the page', () => {
    render(<MoodChoice setForm={setForm} navigation={navigation}/>);
    const buttonElements = document.getElementsByTagName("Button");
    expect(buttonElements.length).toEqual(1);
});

test('should call next method when clicking on the next button', (done) => {
    const handlerForClick = {
        next: () => {
            done();
        }
    };
    const {getByText} = render(<MoodChoice setForm={setForm} navigation={handlerForClick}/>);
    const buttonNode = getByText("Next");
    act(() => {
        fireEvent.click(buttonNode)
    })
});