import api from '../lib/axios';

/**
 * This module provides a set of methods to make requests to the API.
 * 
 * Usage:
 * 
 * 1. Import the module:
 *    import manageData from './manageData';
 * 
 * 2. Create an instance of the manageData module:
 *    const dataManager = manageData();
 * 
 * 3. Use the available methods to make API requests:
 *    - GET request:
 *      const response = await dataManager.get('/api/endpoint');
 * 
 *    - POST request:
 *      const response = await dataManager.post('/api/endpoint', data);
 * 
 *    - PUT request:
 *      const response = await dataManager.put('/api/endpoint', data);
 * 
 *    - DELETE request:
 *      const response = await dataManager.delete('/api/endpoint');
 * 
 * 4. Handle the response as needed.
 * 
 * 
 * @returns {object} - Object with methods to make requests to the API
 * 
 */

export default function manageData() {
  const call = async (method: string, endpoint: string, data?: any) => {
    try {
      const response = await api({
        method,
        url: endpoint,
        data,
      });

      return response.data;
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const get = (endpoint: string) => call('get', endpoint);
  const post = (endpoint: string, data: any) => call('post', endpoint, data);
  const put = (endpoint: string, data: any) => call('put', endpoint, data);
  const del = (endpoint: string) => call('delete', endpoint);

  return {
    get,
    post,
    put,
    delete: del,
  };
}