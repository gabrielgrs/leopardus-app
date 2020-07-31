import { statusKeys } from 'helpers/status'
import { getAll, create, getByIdentifier } from './firebase'

const collection = 'process'

export const createProcess = (data) =>
  create(collection, {
    ...data,
    status: statusKeys.newLead,
    createdAt: Date.now()
  })

export const getProcessByIdentifier = (identifier) =>
  getByIdentifier(collection, identifier)

export const getAllProcess = () => getAll(collection)
