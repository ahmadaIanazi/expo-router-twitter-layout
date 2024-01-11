import boards from '../../../boards'
import manageAuth from '../../../managers/manageAuth'

export default function index() {
  const { status } = manageAuth()

  return boards.Feed
}