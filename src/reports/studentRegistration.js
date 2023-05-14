import React from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'left',
  },
  field: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  fieldTitle: {
    width: '35%',
    fontSize: 14,
    fontWeight: 'bold',
  },
  fieldValue: {
    width: '65%',
    fontSize: 14,
  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

const StudentRegistration = ({ studentData }) => {
  return (
    <PDFViewer width="100%" height="100%">
      <Document>
        <Page style={styles.page}>
          <Text style={styles.title}>Student Profile</Text>
          <View style={styles.line} />
          <Text style={styles.header}>Student Information</Text>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Student Name:</Text>
            <Text style={styles.fieldValue}>{studentData.studentName}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Email:</Text>
            <Text style={styles.fieldValue}>{studentData.email}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Father's Name:</Text>
            <Text style={styles.fieldValue}>{studentData.fatherName}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Mother's Name:</Text>
            <Text style={styles.fieldValue}>{studentData.motherName}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Gender:</Text>
            <Text style={styles.fieldValue}>{studentData.gender}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Date of Birth:</Text>
            <Text style={styles.fieldValue}>{studentData.dateOfBirth}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Department:</Text>
            <Text style={styles.fieldValue}>{studentData.department}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Mobile Number:</Text>
            <Text style={styles.fieldValue}>{studentData.mobileNumber}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default StudentRegistration;
