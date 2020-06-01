import IMailProvider from '../models/IMailProvider';
import ISendoMailDTO from '../dtos/ISendMailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendoMailDTO[] = [];

  public async sendMail(message: ISendoMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
