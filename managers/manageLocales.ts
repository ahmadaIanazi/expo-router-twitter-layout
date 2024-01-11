import { useContext } from 'react'
import Localization from '../translations'

export default function manageLocales() {
  const l = useContext(Localization)

  return { l }
}
