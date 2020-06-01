import ISendoMailDTO from '../dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendoMailDTO): Promise<void>;
}
