import { useContext, createContext } from 'react';

type State<T> = {
  select: T;
  setSelect: (value: T) => void;
};

const state: State<number> = {
  select: 0,
  setSelect: value => value,
};

export const PriceState = createContext(state);

export const usePriceSwitch = () => {
  return useContext(PriceState);
};
