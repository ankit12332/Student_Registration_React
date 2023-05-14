import React from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
  },
  section: {
    marginBottom: 20,
  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  leftColumn: {
    width: '50%',
    fontSize: 12,
  },
  rightColumn: {
    width: '50%',
    fontSize: 12,
    textAlign: 'right',
  },
  columnContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    width: '20%',
    paddingLeft: 5,
  },
  columnTitle: {
    fontWeight: 'extrabold',
    fontSize:'13px'
  },
  columnValue: {
    fontSize:'10px',
    marginTop:'10px'
  },
});

const StudentRegistration = ({ studentData }) => {
  return (
    <PDFViewer width="100%" height="100%">
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Student Registration</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.section}>
            <View style={styles.columnContainer}>
              <View style={styles.leftColumn}>
                <Text>Student Name: {studentData.studentName}</Text>
                <Text>Email: {studentData.email}</Text>
              </View>
              <View style={styles.rightColumn}>
                <Text>Date of Birth: {studentData.dateOfBirth}</Text>
              </View>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.section}>
            <Text style={styles.title}>Results</Text>
            <View style={styles.line} />
            <View style={styles.columnContainer}>
              <View style={styles.column}>
                <Text style={styles.columnTitle}>Father's Name</Text>
                <Text style={styles.columnValue}>{studentData.fatherName}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.columnTitle}>Mother's Name</Text>
                <Text style={styles.columnValue}>{studentData.motherName}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.columnTitle}>Gender</Text>
                <Text style={styles.columnValue}>{studentData.gender}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.columnTitle}>Department</Text>
                <Text style={styles.columnValue}>{studentData.department}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.columnTitle}>Mobile Number</Text>
                <Text style={styles.columnValue}>{studentData.mobileNumber}</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Text>Generated on: {new Date().toLocaleDateString()}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default StudentRegistration;
