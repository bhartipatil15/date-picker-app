import { render, screen } from '@testing-library/react';
import DatePicker from '../components/DatePicker';
import { useDatePickerStore } from '../store/useDatePickerStore';

// Mock Zustand store
jest.mock('../store/useDatePickerStore', () => ({
  useDatePickerStore: jest.fn(),
}));

test('renders date picker with start date input', () => {
  // Mock the store values
  useDatePickerStore.mockReturnValue({
    startDate: new Date(),
    setStartDate: jest.fn(),
  });

  render(<DatePicker />);
  const dateInput = screen.getByLabelText(/Select Start Date/i);
  expect(dateInput).toBeInTheDocument();
});
