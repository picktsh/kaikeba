import axios from 'axios'
import {Feature} from '@/types'

export function getFeatures() {
  return axios.get<Feature[]>('/api/list')
}