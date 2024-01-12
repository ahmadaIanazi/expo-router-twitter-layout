import { useFlowStore } from '../stores'
import { flowName, flowState } from '../stores/flow'
import { asyncRoute } from '../utils/asyncRoute'

export default function handlePopupFlow() {
  const { flows, updateFlows } = useFlowStore()

  const startPopup = () => {
    if (flows.popup === flowState.NOT_STARTED) {
      asyncRoute('/(modals)/Popup')
      updateFlows(flowName.popup, flowState.IN_PROGRESS)
    }
  }

  const completePopup = () => {
    if (flows.popup === flowState.NOT_STARTED) {
      asyncRoute('/(modals)/Popup')
      updateFlows(flowName.popup, flowState.COMPLETED)
    }
  }

  return {
    startPopup,
    completePopup,
  }
}