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
  section: {
    marginBottom: 20,
  },
  field: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  fieldTitle: {
    width: '40%',
    fontSize: 14,
    fontWeight: 'bold',
  },
  fieldValue: {
    width: '60%',
    fontSize: 14,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
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
          <Text style={styles.header}>Student Information</Text>
          <View style={styles.section}>
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
          </View>
          <View style={styles.footer}>
            <Text>Generated on: {new Date().toLocaleDateString()}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default StudentRegistration
