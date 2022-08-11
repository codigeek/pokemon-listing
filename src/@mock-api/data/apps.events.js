import { SERVICE_URL } from 'config';
import api from '../api';

const addDaysToday = (days = 0) => {
  const result = new Date();
  result.setDate(result.getDate() + days);
  return result.toISOString().replace(/T.*$/, '');
};

let guid = 0;

const createId = () => {
  guid += 1;
  return String(guid);
};

let eventsData = [
  {
    id: createId(),
    title: 'Cita con Cliente #1',
    start: addDaysToday(5),
    end: addDaysToday(7),
    color: '#ff000',
    category: 'Otros',
  },
  {
    id: createId(),
    title: 'Cita con Cliente #2',
    start: addDaysToday(-11),
    end: addDaysToday(-8),
    category: 'Trabajo',
  },
  {
    id: createId(),
    title: 'Cita con doctor',
    start: `${addDaysToday(2)}T12:15:00`,
    category: 'Personal',
  },
  {
    id: createId(),
    title: 'Reunión en Google Meet',
    start: `${addDaysToday(-3)}T12:00:00`,
    url: 'https://meet.google.com/',
    category: 'Trabajo',
  },
  {
    id: createId(),
    title: 'Junta administrativa',
    start: `${addDaysToday()}T10:30:00`,
    end: `${addDaysToday()}T12:30:00`,
    category: 'Otros',
  },
  {
    id: createId(),
    title: 'Horario de comida',
    start: `${addDaysToday()}T14:30:00`,
    end: `${addDaysToday()}T16:30:00`,
    category: 'Personal',
  },
  {
    id: createId(),
    title: 'Cierre del día',
    start: `${addDaysToday()}T19:30:00`,
    end: `${addDaysToday()}T21:30:00`,
    category: 'Personal',
  },
  {
    id: createId(),
    title: 'Cita con cliente',
    start: `${addDaysToday(16)}T9:30:00`,
    end: `${addDaysToday(16)}T10:15:00`,
    category: 'Trabajo',
  },
  {
    id: createId(),
    title: 'Cita con cliente',
    start: addDaysToday(25),
    end: addDaysToday(29),
    category: 'Otros',
  },
  {
    id: createId(),
    title: 'Cita con cliente',
    start: addDaysToday(-36),
    end: addDaysToday(-34),
    category: 'Trabajo',
  },
  {
    id: createId(),
    title: 'Cita con cliente',
    start: addDaysToday(35),
    end: addDaysToday(38),
    category: 'Otros',
  },
  {
    id: createId(),
    title: 'Horario de comida',
    start: `${addDaysToday(-19)}T14:30:00`,
    end: `${addDaysToday(-19)}T16:30:00`,
    category: 'Personal',
  },
  {
    id: createId(),
    title: 'Cierre del día',
    start: `${addDaysToday(-21)}T19:30:00`,
    end: `${addDaysToday(-21)}T21:30:00`,
    category: 'Personal',
  },
  {
    id: createId(),
    title: 'Cita con cliente',
    start: `${addDaysToday(39)}T19:30:00`,
    end: `${addDaysToday(39)}T21:30:00`,
    category: 'Personal',
  },
  {
    id: createId(),
    title: 'Horario de comida',
    start: `${addDaysToday(39)}T14:30:00`,
    end: `${addDaysToday(39)}T16:30:00`,
    category: 'Personal',
  },
];
api.onGet(`${SERVICE_URL}/apps/events`).reply(200, eventsData);
api.onPost(`${SERVICE_URL}/apps/events`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { item } = requestData;

  // Add item
  eventsData = [{ ...item, id: createId() }, ...eventsData];
  return [200, eventsData];
});
api.onPut(`${SERVICE_URL}/apps/events`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { item } = requestData;
  if (eventsData.find((x) => x.id === item.id)) {
    eventsData = eventsData.map((x) => (x.id === item.id ? item : x));
    // Update item
    return [200, eventsData];
  }
  eventsData.push({ ...item, id: createId() });
  return [200, eventsData];
});
api.onDelete(`${SERVICE_URL}/apps/events`).reply((config) => {
  const { id } = config;
  // Delete item
  eventsData = [...eventsData.filter((x) => id !== x.id)];
  return [200, eventsData];
});
