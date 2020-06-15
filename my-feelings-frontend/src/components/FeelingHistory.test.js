import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FeelingHistory from './FeelingHistory';
import FeelingModel from '../model/FeelingModel';

test('renders loading if the feelings attribute is undefined', () => {
    const { getByText } = render(<FeelingHistory />);
    const loadingElement = getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
});

test('renders a table with 3 headers', () => {
    render(<FeelingHistory feelings={[]}/>);
    const tables = document.getElementsByTagName("table");
    const headers = document.getElementsByTagName("th");
    expect(tables.length).toEqual(1);
    expect(headers.length).toEqual(3);
});

test('renders a line in the table body per feeling', () => {
    const feelings = [new FeelingModel(), new FeelingModel()];
    render(<FeelingHistory feelings={feelings}/>);
    const bodyTableElements = document.getElementsByTagName("tbody");
    expect(bodyTableElements[0].getElementsByTagName("tr").length).toEqual(feelings.length);
});