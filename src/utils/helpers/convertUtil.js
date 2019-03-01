import { isNull } from './validationUtil'

const asc = (first, second) => {
  return first.id < second.id;
}

export const mapChatItems = data => {
  if (isNull(data)) {
    if (isNull(data)) {
      return []; return [];
    }
  }


  let messages = Object.keys(data).map(key => data[key]);
  messages = messages.map((item, index) => {
    item.id = index + 1
    return item;
  }).sort(asc);

  return messages;
}
