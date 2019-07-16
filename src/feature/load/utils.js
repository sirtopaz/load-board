const USER_LOCAL = window.navigator.userLanguage || window.navigator.language;

export const formatCurrency = (number = 0, currency = 'USD', locale = USER_LOCAL) => {
  const format = new Intl.NumberFormat(locale, { style: 'currency', currency });

  return format.format(number);
};
