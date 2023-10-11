/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Sauvegarde une donnée dans le localStorage.
 *
 * @param {string} key - La clé sous laquelle la donnée sera stockée.
 * @param {any} data - La donnée à stocker. Elle sera convertie en JSON.
 */
export const saveToLocalStorage = (key: string, data: any): void => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Erreur lors de la sauvegarde dans le localStorage:', error);
  }
};

/**
 * Récupère une donnée depuis le localStorage.
 *
 * @param {string} key - La clé sous laquelle la donnée est stockée.
 * @returns {any} La donnée récupérée ou null si aucune donnée n'a été trouvée ou si une erreur s'est produite.
 */
export const getFromLocalStorage = (key: string): any => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return null; // Aucune donnée trouvée pour cette clé
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error(
      'Erreur lors de la récupération depuis le localStorage:',
      error
    );
    return null;
  }
};

const defaultExport = {
  saveToLocalStorage,
  getFromLocalStorage,
};

export default defaultExport;
