import { router } from 'expo-router'

export const asyncRoute = (
  route: string,
  type: 'push' | 'replace' | undefined = undefined
) => {
 if (type === 'replace') {
   wait(() => router.replace(route))
 } else {
   wait(() => router.push(route))
 }
}

const wait = (func: () => void) => {
  setTimeout(() => {
    func()
  }, 1)
}
