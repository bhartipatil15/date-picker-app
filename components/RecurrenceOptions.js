import { useDatePickerStore } from '../store/useDatePickerStore';
import Customization from './Customization';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useDatePickerStore();

  return (
    <div className="mt-4">
      <label className="block mb-2">Recurrence Pattern</label>
      <select
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      {recurrence === 'weekly' || recurrence === 'monthly' ? (
        <Customization />
      ) : null}
    </div>
  );
};

export default RecurrenceOptions;
