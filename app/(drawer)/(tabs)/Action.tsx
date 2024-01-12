import boards from '../../../boards'
import manageAuth from '../../../managers/authentication'

export default function index() {
  const { status } = manageAuth()

  return boards.Feed
}