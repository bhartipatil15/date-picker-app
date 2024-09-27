import { create } from 'zustand';

export const useDatePickerStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrence: 'daily',
  setStartDate: (date) => set(() => ({ startDate: date })),
  setEndDate: (date) => set(() => ({ endDate: date })),
  setRecurrence: (pattern) => set(() => ({ recurrence: pattern })),
  reset: () => set(() => ({ startDate: null, endDate: null, recurrence: 'daily' })),
}));
