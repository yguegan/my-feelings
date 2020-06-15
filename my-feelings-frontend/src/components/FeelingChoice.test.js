import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FeelingChoice from './FeelingChoice';
import { act } from 'react-dom/test-utils';

const navigation = {
    next: () => {}
};

const setValue = () => {}

test('renders a title element in the page', () => {
  render(<FeelingChoice setValue={setValue} navigation={navigation}/>);
  const titleElements = document.getElementsByTagName("h1");
  expect(titleElements.length).toEqual(1);
});

test('renders a title element in the page with "How do you feel today ?"', () => {
    const { getByText } = render(<FeelingChoice setValue={setValue} navigation={navigation}/>);
    const titleElement = getByText("How do you feel today ?");
    expect(titleElement).toBeInTheDocument();
});

test('renders an elements with the value Depressed in the page', () => {
    const {getByText} = render(<FeelingChoice setValue={setValue} navigation={navigation}/>);
    const selectedFeelingsElementDepressed = getByText("Depressed");
    expect(selectedFeelingsElementDepressed).toBeInTheDocument();
});

test('renders an elements with the value Optimistic in the page', () => {
    const {getByText} = render(<FeelingChoice setValue={setValue} navigation={navigation}/>);
    const selectedFeelingsElementOptimistic = getByText("Optimistic");
    expect(selectedFeelingsElementOptimistic).toBeInTheDocument();
});

test('renders an elements with the value Bored in the page', () => {
    const {getByText} = render(<FeelingChoice setValue={setValue} navigation={navigation}/>);
    const selectedFeelingsElementBored = getByText("Bored");
    expect(selectedFeelingsElementBored).toBeInTheDocument();
});

test('renders an elements with the value Happy in the page', () => {
    const {getByText} = render(<FeelingChoice setValue={setValue} navigation={navigation}/>);
    const selectedFeelingsElementHappy = getByText("Happy");
    expect(selectedFeelingsElementHappy).toBeInTheDocument();
});

test('should call setValue handler when the user select/unselect a feeling', (done) => {
    let selectedFeelings = [];
    const setValueForTest = (event) => {
        done();
    }
    const {getByText} = render(<FeelingChoice setValue={setValueForTest} navigation={navigation}/>);
    const selectedFeelingsElementHappy = getByText("Bored");
    act(() => {
        fireEvent.click(selectedFeelingsElementHappy)
    })
});

test('should call setValue handler with an untyped target element', (done) => {
    let selectedFeelings = [];
    const setValueForTest = (event) => {
        expect(event.target.type).toEqual(undefined);
        done();
    }
    const {getByText} = render(<FeelingChoice setValue={setValueForTest} navigation={navigation}/>);
    const selectedFeelingsElementHappy = getByText("Bored");
    act(() => {
        fireEvent.click(selectedFeelingsElementHappy)
    })
});

test('should call setValue handler with a target element named selectedFeelings', (done) => {
    let selectedFeelings = [];
    const setValueForTest = (event) => {
        expect(event.target.name).toEqual("selectedFeelings");
        done();
    }
    const {getByText} = render(<FeelingChoice setValue={setValueForTest} navigation={navigation}/>);
    const selectedFeelingsElementHappy = getByText("Bored");
    act(() => {
        fireEvent.click(selectedFeelingsElementHappy)
    })
});

test('should call setValue handler with a target element value as an array', (done) => {
    let selectedFeelings = [];
    const setValueForTest = (event) => {
        expect(Array.isArray(event.target.value)).toBe(true);
        done();
    }
    const {getByText} = render(<FeelingChoice setValue={setValueForTest} navigation={navigation}/>);
    const selectedFeelingsElementHappy = getByText("Bored");
    act(() => {
        fireEvent.click(selectedFeelingsElementHappy)
    })
});

test('should add Happy in the selectedFeelings array when pressing one of the selectedFeelings button and the value is not in the array', (done) => {
    let selectedFeelings = [];
    const setValueForTest = (event) => {
        expect(event.target.value.indexOf("Happy")).toEqual(0);
        done();
    }
    const {getByText} = render(<FeelingChoice setValue={setValueForTest} navigation={navigation}/>);
    const selectedFeelingsElementHappy = getByText("Happy");
    act(() => {
        fireEvent.click(selectedFeelingsElementHappy)
    })
});

test('should remove Happy in the selectedFeelings array when pressing one of the selectedFeelings button and the value is in the array', () => {
    let selectedFeelings = [];
    const setValueForTest = (event) => {
        selectedFeelings = event.target.value;
    }
    const {getByText} = render(<FeelingChoice setValue={setValueForTest} navigation={navigation}/>);
    const selectedFeelingsElementHappy = getByText("Happy");
    act(() => {
        fireEvent.click(selectedFeelingsElementHappy)
    })

    act(() => {
        fireEvent.click(selectedFeelingsElementHappy)
    })

    expect(selectedFeelings.indexOf("Happy")).toEqual(-1);
});

test('renders the button next in the page', () => {
    render(<FeelingChoice setValue={setValue} navigation={navigation}/>);
    const buttonElements = document.getElementsByTagName("Button");
    expect(buttonElements.length).toEqual(1);
});

test('should call next method when clicking on the next button', (done) => {
    const handlerForClick = {
        next: () => {
            done();
        }
    };
    const {getByText} = render(<FeelingChoice setValue={setValue} navigation={handlerForClick}/>);
    const buttonNode = getByText("Next");
    act(() => {
        fireEvent.click(buttonNode)
    })
});