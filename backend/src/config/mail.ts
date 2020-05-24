interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'Aqui vai o email que está configura no AWS',
      name: 'Lineu Pastorelli',
    },
  },
} as IMailConfig;
