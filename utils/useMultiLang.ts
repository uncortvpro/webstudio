export const useMultiLang = (item: any, key: string): string => {
  const { $i18n } = useNuxtApp();
  const { locale } = $i18n;

  if (!item) return '';

  return item[`${key}_${locale.value}`] || '';
};
