export const SendMessage = `mutation Mutation($content: String!, $owner: String!) {
  sendMessage(content: $content, owner: $owner)
}`