export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Appointment {
  id: string;
  petName: string;
  petType: string;
  serviceId: string;
  doctorId: string;
  date: string;
  time: string;
  ownerName: string;
  phone: string;
}
