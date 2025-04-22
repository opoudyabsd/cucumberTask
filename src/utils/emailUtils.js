import MailosaurClient from 'mailosaur';
const client = new MailosaurClient('j7fDXQsc3sawpkYum765ltvG1xWvYAOW'); // Replace with your Mailosaur API key

export async function getVerificationCode() {
  const serverId = 'aprtds8r';
  const message = await client.messages.get(serverId, {
    sentFrom: 'noreply+d3d68ef@id.atlassian.com',
  });
  const code = message.text.body.match(/\b[A-Z0-9]{6}\b/g);
  console.log(code.toString());
  return code.toString();
}
