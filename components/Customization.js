import { useDatePickerStore } from '../store/useDatePickerStore';
import { useState } from 'react';

const Customization = () => {
  const { recurrence } = useDatePickerStore();

  if (recurrence === 'weekly') {
    return <WeeklyCustomization />;
  }
  // Customization for daily, monthly, yearly can go here...
  return null;
};

const WeeklyCustomization = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [selectedDays, setSelectedDays] = useState(new Array(daysOfWeek.length).fill(false)); // Initial state for each day

  const toggleDay = (index) => {
    const updatedDays = [...selectedDays];
    updatedDays[index] = !updatedDays[index]; // Toggle the selected state
    setSelectedDays(updatedDays);
  };

  return (
    <div className="mt-4">
      <label className="block mb-2">Select Days of the Week</label>
      <div className="flex flex-wrap">
        {daysOfWeek.map((day, index) => (
          <label key={index} className="mr-4 flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedDays[index]}
              onChange={() => toggleDay(index)}
              aria-label={`Select ${day}`}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Customization;
