import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text,StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('students.db');

const BTVN = () => {
  const [name, setName] = useState('');
  const [adrrr, setAdrrr] = useState('');
  const [classField, setClassField] = useState('');
  const [gpa, setGpa] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, adrrr TEXT, class TEXT, gpa REAL);'
      );
    });
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM students;', [], (_, { rows }) => {
        const data = rows._array;
        setStudents(data);
      });
    });
  };

  const addStudent = () => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO students (name, adrrr, class, gpa) VALUES (?, ?, ?, ?);',
        [name, adrrr, classField, gpa],
        (_, { insertId }) => {
          setName('');
          setAdrrr('');
          setClassField('');
          setGpa('');
          fetchStudents();
        }
      );
    });
  };

  const deleteStudent = studentId => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM students WHERE id = ?;',
        [studentId],
        () => {
          fetchStudents();
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={adrrr}
        onChangeText={text => setAdrrr(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Class"
        value={classField}
        onChangeText={text => setClassField(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="GPA"
        value={gpa}
        onChangeText={text => setGpa(text)}
      />
      <Button title="Add Student" onPress={addStudent} />
      <FlatList
        data={students}
        keyExtractor={item => item.id.toString()}
        style={{width: '100%', padding: 4}}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text  style={{
                        fontSize: 20,
                        fontFamily: "Quicksand_500Medium",
                        color: 'black',
                    }}>{`ID: ${item.id}`}</Text>
            <Text  style={{
                        fontSize: 20,
                        fontFamily: "Quicksand_500Medium",
                        color: 'black',
                    }}>{`Name: ${item.name}`}</Text>
            <Text  style={{
                        fontSize: 20,
                        fontFamily: "Quicksand_500Medium",
                        color: 'black',
                    }}>{`Address: ${item.adrrr}`}</Text>
            <Text  style={{
                        fontSize: 20,
                        fontFamily: "Quicksand_500Medium",
                        color: 'black',
                    }}>{`Class: ${item.class}`}</Text>
            <Text  style={{
                        fontSize: 20,
                        fontFamily: "Quicksand_500Medium",
                        color: 'black',
                    }}>{`GPA: ${item.gpa}`}</Text>
            <Button
              title="Delete"
              onPress={() => deleteStudent(item.id)}
              style={{
                fontSize: 20,
                fontFamily: "Quicksand_500Medium",
                color: 'black',
            }}
            />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});
export default BTVN;
