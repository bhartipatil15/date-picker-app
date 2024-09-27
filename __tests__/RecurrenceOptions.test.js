import { render, screen, fireEvent } from '@testing-library/react';
import RecurrenceOptions from '../components/RecurrenceOptions';
import { useDatePickerStore } from '../store/datePickerStore';

// Mock Zustand store
jest.mock('../store/datePickerStore', () => ({
  useDatePickerStore: jest.fn(),
}));

test('renders recurrence options with default value', () => {
  useDatePickerStore.mockReturnValue({
    recurrence: 'daily',
    setRecurrence: jest.fn(),
  });

  render(<RecurrenceOptions />);
  const selectElement = screen.getByLabelText(/Recurrence Pattern/i);
  expect(selectElement.value).toBe('daily');
});

test('changes recurrence value on user selection', () => {
  const mockSetRecurrence = jest.fn();
  useDatePickerStore.mockReturnValue({
    recurrence: 'daily',
    setRecurrence: mockSetRecurrence,
  });

  render(<RecurrenceOptions />);
  const selectElement = screen.getByLabelText(/Recurrence Pattern/i);

  // Simulate user selecting a different recurrence pattern
  fireEvent.change(selectElement, { target: { value: 'weekly' } });
  expect(mockSetRecurrence).toHaveBeenCalledWith('weekly');
});
