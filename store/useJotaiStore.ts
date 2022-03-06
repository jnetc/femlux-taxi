import { atom } from 'jotai';
import { ThemesType } from '@Types';

export const state = atom<ThemesType>('dark');

export const useJotaiStore = atom<ThemesType, ThemesType>(
  get => get(state),
  (_, set, newState) => {
    set(state, newState);
  }
);
