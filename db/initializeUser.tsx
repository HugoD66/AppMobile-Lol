/*
import db from '../database';

// Insérer des données dans la table 'users'
db.transaction((tx:
                  { executeSql: (
                    arg0: string, arg1: string[],
                    arg2: (_: any, { rowsAffected }: { rowsAffected: any; }) => void,
                    arg3: (_: any, error: any) => void) => void; }) => {
  tx.executeSql(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    ['John Doe', 'johndoe@example.com'],
    (_, { rowsAffected }) => {
      if (rowsAffected > 0) {
        console.log('Données insérées avec succès.');
      } else {
        console.log("Échec de l'insertion des données.");
      }
    },
    (_, error) => {
      console.error('Erreur lors de l\'insertion des données :', error);
    }
  );
});
 */
