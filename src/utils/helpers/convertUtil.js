import { isNull } from './validationUtil'

export const mapChatItems = data => {
  if (isNull(data)) {
    return [];
  }

  let messages = Object.keys(data).map(key => data[key]);
  messages = messages
    .map((item, index) => {
      item.id = index + 1
      return item;
    }).sort((first, second) => {
      return second.createdAt - first.createdAt;
    });

  return messages;
}
