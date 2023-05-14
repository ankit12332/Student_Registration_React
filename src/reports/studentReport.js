import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: '20px',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    alignItems: 'center',
    height: 30,
    textAlign: 'center',
    fontStyle: 'bold',
  },
  cell: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#000000',
    fontSize: 8,
    wordWrap: 'break-word',
    padding: 4,
    overflow: 'hidden',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#000000',
    alignItems: 'center',
    height: 30,
    textAlign: 'center',
    fontStyle: 'bold',
    marginTop: 10,
  },
  totalCell: {
    fontSize: 8,
    wordWrap: 'break-word',
    padding: 4,
    overflow: 'hidden',
  },
  reportHeader: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
  },
});

const Report = ({ students }) => {
  const totalStudents = students.length;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Student Data Report</Text>
          <View style={styles.row}>
            <Text style={styles.cell}>Name</Text>
            <Text style={styles.cell}>Email</Text>
            <Text style={styles.cell}>Father Name</Text>
            <Text style={styles.cell}>Mother Name</Text>
            <Text style={styles.cell}>Gender</Text>
            <Text style={styles.cell}>Date of Birth</Text>
            <Text style={styles.cell}>Department</Text>
            <Text style={styles.cell}>Mobile Number</Text>
          </View>
          {students.map((student) => (
            <View style={styles.row} key={student.id}>
              <Text style={styles.cell}>{student.studentName}</Text>
              <Text style={styles.cell}>{student.email}</Text>
              <Text style={styles.cell}>{student.fatherName}</Text>
              <Text style={styles.cell}>{student.motherName}</Text>
              <Text style={styles.cell}>{student.gender}</Text>
              <Text style={styles.cell}>{student.dateOfBirth}</Text>
              <Text style={styles.cell}>{student.department}</Text>
              <Text style={styles.cell}>{student.mobileNumber}</Text>
            </View>
          ))}
          <View style={styles.totalRow}>
            <Text style={styles.totalCell}>Total Students: {totalStudents}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Report;
