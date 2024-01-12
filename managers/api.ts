import api from '../lib/axios';

/**
 * This module provides a set of methods to make requests to the API.
 * 
 * @returns {object} - Object with methods to make requests to the API
 * 
 */

interface ApiFunctions {
  get: (endpoint: string) => Promise<any>
  post: (endpoint: string, data: any) => Promise<any>
  put: (endpoint: string, data: any) => Promise<any>
  delete: (endpoint: string) => Promise<any>
  [method: string]: (endpoint: string, data?: any) => Promise<any>
}

export default function manageApi(): ApiFunctions {
  const call = async (method: string, endpoint: string, data?: any) => {
    try {
      const response = await api({
        method,
        url: endpoint,
        data,
      })

      return response.data
    } catch (error) {
      console.error('There was an error!', error)
    }
  }

  const get = (endpoint: string) => call('get', endpoint)
  const post = (endpoint: string, data: any) => call('post', endpoint, data)
  const put = (endpoint: string, data: any) => call('put', endpoint, data)
  const del = (endpoint: string) => call('delete', endpoint)

  return {
    get,
    post,
    put,
    delete: del,
  }
}