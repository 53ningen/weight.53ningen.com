import { parseISO } from 'date-fns'
import HealthData from './models/HealthData'

export const data: HealthData[] = [
  {
    timestamp: parseISO('2021-01-01T12:23:34+09:00'),
    weight: 62.4,
    bfp: 18.3,
  },
  {
    timestamp: parseISO('2021-02-01T12:23:34+09:00'),
    weight: 61.4,
    bfp: 15.3,
  },
  {
    timestamp: parseISO('2021-03-01T12:23:34+09:00'),
    weight: 60.4,
    bfp: 13.3,
  },
  {
    timestamp: parseISO('2021-04-01T12:23:34+09:00'),
    weight: 63.4,
    bfp: 14.3,
  },
  {
    timestamp: parseISO('2021-05-01T12:23:34+09:00'),
    weight: 62.4,
    bfp: 12.3,
  },
  {
    timestamp: parseISO('2021-12-01T12:23:34+09:00'),
    weight: 60.4,
    bfp: 10.3,
  },
]
