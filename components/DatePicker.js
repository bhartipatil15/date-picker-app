import { useDatePickerStore } from '../store/useDatePickerStore';
import RecurrenceOptions from './RecurrenceOptions';
import MiniCalendar from './MiniCalendar';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
  const { startDate, setStartDate } = useDatePickerStore();

  const resetDate = () => {
    setStartDate(null); // Resetting to null or a specific date
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <label htmlFor="date-picker" className="block mb-2">Select Start Date</label>
      <ReactDatePicker
        id="date-picker"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="p-2 border border-gray-300 rounded"
        aria-label="Date Picker"
      />
      <RecurrenceOptions />
      <MiniCalendar />
      <button
        onClick={resetDate}
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Reset Date
      </button>
    </div>
  );
};

export default DatePicker;
