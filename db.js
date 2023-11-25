import * as SQLite from 'expo-sqlite';
export const db = SQLite.openDatabase('MaBaseDeDonnees');

db.transaction(tx => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, invocateur TEXT, password TEXT);'
    );
});
db.transaction(tx => {
    tx.executeSql(
        'INSERT INTO Users (invocateur, password) VALUES (?, ?)',
        ['Tt', 'Pa']
    );
});

db.transaction(tx => {
    tx.executeSql(
        'SELECT * FROM MaTable',
        [],
        (_, { rows }) => console.log(rows)
    );
});


