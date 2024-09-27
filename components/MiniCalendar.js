import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDatePickerStore } from '../store/useDatePickerStore';
import { isSameDay, addWeeks, addMonths, addYears } from 'date-fns';
import { useMemo, useEffect } from 'react';

const MiniCalendar = () => {
  const { startDate, recurrence } = useDatePickerStore();

  // Log the values of startDate and recurrence
  useEffect(() => {
    console.log('startDate:', startDate);
    console.log('recurrence:', recurrence);
  }, [startDate, recurrence]);

  const highlightDates = useMemo(() => {
    if (!startDate) return () => '';
  
    return ({ date }) => {
      let highlightClass = '';
      switch (recurrence) {
        case 'daily':
          highlightClass = date >= startDate ? 'highlight' : '';
          break;
        case 'weekly':
          highlightClass = isSameDay(date, addWeeks(startDate, Math.floor((date - startDate) / (7 * 24 * 60 * 60 * 1000)))) ? 'highlight' : '';
          break;
        case 'monthly':
          highlightClass = date.getDate() === startDate.getDate() ? 'highlight' : '';
          break;
        case 'yearly':
          highlightClass = date.getDate() === startDate.getDate() && date.getMonth() === startDate.getMonth() ? 'highlight' : '';
          break;
        default:
          highlightClass = '';
      }
  
      console.log('Date:', date, 'Highlight Class:', highlightClass);
      return highlightClass;
    };
  }, [startDate, recurrence]);
  
  return (
    <div className="mt-4">
      <label className="block mb-2">Recurring Dates Preview</label>
      <Calendar tileClassName={highlightDates} />

      <style jsx>{`
        .highlight {
          background-color: #ffcccb;
          border: 2px solid #00f;
          border-radius: 50%;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default MiniCalendar;
