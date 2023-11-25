/*
import db from '../../database';

const addUser = (email: string, password: string) => {
  db.transaction((tx: { executeSql: (arg0: string, arg1: string[], arg2: (_: any, { rowsAffected }: any) => void, arg3: (_: any, error: any) => void) => void; }) => {
    tx.executeSql(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, password],
      (_: any, {rowsAffected}: any) => {
        if (rowsAffected > 0) {
          console.log('Utilisateur ajouté avec succès.');
        } else {
          console.log("Échec de l'ajout de l'utilisateur.");
        }
      },
      (_, error) => {
        console.error("Erreur lors de l'ajout de l'utilisateur :", error);
      }
    );
  });
};

export default addUser;
 */