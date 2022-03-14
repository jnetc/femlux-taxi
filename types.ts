export type ThemesType = 'light' | 'dark';

export type LanguagesType = 'ru' | 'en' | 'fi';

export const selectedLanguage = <T>(
  landguage: T,
  languages: Array<T>
): Array<T> => {
  const selected = languages.find(l => l === landguage) as T;
  const unselected = languages.filter(language => language !== landguage);
  return [selected, ...unselected];
};

interface TitleAndDescType<T> {
  title: T;
  description: T;
}
interface HomeType<T> extends TitleAndDescType<T> {
  mainButtonName: T;
  mainTelephoneNum: T;
}
export interface PriceTimeType<T> {
  label: T;
  price: T;
}
interface PriceType<T> extends TitleAndDescType<T> {
  priceLand: T;
  priceLandDesc: T;
  switcherName: T;
  priceTrip: T;
  priceTripDesc: T;
  priceByKm: Array<PriceTimeType<T>>;
  priceByTime: Array<PriceTimeType<T>>;
  holidays: Array<PriceTimeType<T>>;
  weekend: Array<PriceTimeType<T>>;
  workdays: Array<PriceTimeType<T>>;
}
export interface ServiceType<T> extends TitleAndDescType<T> {
  iconName: T;
}
export interface ServicesType<T> extends TitleAndDescType<T> {
  service: Array<ServiceType<T>>;
}

export interface DataType {
  home: HomeType<string>;
  price: PriceType<string>;
  service: ServicesType<string>;
}
