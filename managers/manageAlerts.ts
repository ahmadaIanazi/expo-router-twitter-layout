import { useAlertsStore } from "../stores"

export default function manageAlerts() {
  const { alerts, setAlerts, addAlerts, removeAlerts } = useAlertsStore()

  
  return {
    alerts,
    addAlert: addAlerts,
    removeAlert: removeAlerts
  }
}
