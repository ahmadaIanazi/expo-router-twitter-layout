import manageApi from '../managers/manageApi'

/**
 * @param method 
 * @param endpoint 
 * @param data 
 * @returns 
 * 
* @example   
  const healthCheckHandler = ()=> onPressFunctionHandler('post', endpoints.health, { data: { message: 'Hello World' } });
 */
// General function to handle onPress events
export default function onPressFunctionHandler(method, endpoint, data = {}) {
  const api = manageApi()

  console.log('API call:', method, endpoint, data)
  const handleRequest = async () => {
    try {
      const result = await api[method](endpoint, data)
      console.log('API call result:', result)
      // Handle the response
    } catch (error) {
      console.error('Error in API call:', error)
      // Handle the error
      throw error
    }
  }

  return handleRequest
}
