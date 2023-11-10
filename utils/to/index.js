import moment from 'moment';

export default function toMoment(fromTimestamp) {
  if (
    fromTimestamp !== null &&
    typeof fromTimestamp !== 'undefined' &&
    typeof fromTimestamp.toMillis === 'function'
  ) {
    const toJSdate = fromTimestamp.toDate();
    const now = moment();
    const diffInMinutes = now.diff(toJSdate, 'minutes');
    if (diffInMinutes < 1) {
      return 'now';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    } else if (now.diff(toJSdate, 'hours') < 24) {
      return moment(toJSdate).fromNow();
    } else {
      return moment(toJSdate).format('MMM DD, YYYY');
    }
  } else {
    return 'now';
  }
}

export const toShortText = (string, maxLength) => {
  if (string && string?.length > maxLength) return string.substring(0, 24) + '..';
  else return string;
};