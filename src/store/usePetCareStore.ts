import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AppointmentRecord {
  id: string;
  petName: string;
  petType: string;
  service: string;
  date: string;
  time: string;
  ownerName: string;
  phone: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

interface PetCareStore {
  appointments: AppointmentRecord[];
  addAppointment: (appointment: Omit<AppointmentRecord, 'id' | 'status' | 'createdAt'>) => void;
  cancelAppointment: (id: string) => void;
  clearAppointments: () => void;
}

export const usePetCareStore = create<PetCareStore>()(
  persist(
    (set) => ({
      appointments: [],
      addAppointment: (data) => set((state) => ({
        appointments: [
          ...state.appointments,
          {
            ...data,
            id: Math.random().toString(36).substring(2, 9),
            status: 'pending',
            createdAt: new Date().toISOString(),
          }
        ]
      })),
      cancelAppointment: (id) => set((state) => ({
        appointments: state.appointments.map(app => 
          app.id === id ? { ...app, status: 'cancelled' } : app
        )
      })),
      clearAppointments: () => set({ appointments: [] }),
    }),
    {
      name: 'petcare-storage',
    }
  )
);
