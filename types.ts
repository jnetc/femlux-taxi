export type ThemesType = 'light' | 'dark';

export interface ThemeState {
  theme: ThemesType;
  setTheme: (value: ThemesType) => void;
}
