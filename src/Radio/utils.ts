import { RadioSize } from './types';

export const getRadioSize = ({ size }: { size: RadioSize }) => {
  if (size === 'S') {
    return '18px';
  }

  return '20px';
};

export const getSelectedRadioSize = ({ size }: { size: RadioSize }) => {
  if (size === 'S') {
    return '10px';
  }

  return '12px';
};

export const getSelectedRadioPosition = () => {
  /**
   * This is computed using:
   * size = (radio height - radio selected height) / 2 - borderSize
   * For S, it looks like
   * size = (18 - 10) / 2 - 1
   * size = 3
   *
   * For L, it looks like
   * size = (20 - 12) / 2 -1
   * size = 3
   */
  return '3px';
};
