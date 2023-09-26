interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin', 'Operations Staff', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read car information',
    'Read booking information',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage car data', 'Manage booking data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/bb8a9ee6-d052-4de7-9e14-8d5f1d268c8e',
};
