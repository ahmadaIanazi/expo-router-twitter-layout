import { customEvent } from 'vexo-analytics';
export const vexoit = (event, object) => {
  customEvent(event, object);
}