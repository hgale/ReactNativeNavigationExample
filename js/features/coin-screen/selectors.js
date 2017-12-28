import { createSelector } from 'reselect';

const getCrypto = state => state.crypto;

export const getCoins = createSelector([getCrypto], crypto => crypto.coins);
