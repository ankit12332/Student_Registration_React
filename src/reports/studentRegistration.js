import React from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  fieldTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fieldValue: {
    fontSize: 14,
    marginBottom: 10,
  },
  page: {
    padding: 30,
  },
});

const StudentRegistration = ({ studentData }) => {
    return (
        <PDFViewer width="100%" height="100%">
            <Document>
                <Page style={styles.page}>
                    <Text style={styles.title}>Student Profile</Text>
                    <Text style={styles.fieldTitle}>Student Name:</Text>
                    <Text style={styles.fieldValue}>{studentData.studentName}</Text>
                    <Text style={styles.fieldTitle}>Email:</Text>
                    <Text style={styles.fieldValue}>{studentData.email}</Text>
                    <Text style={styles.fieldTitle}>Father's Name:</Text>
                    <Text style={styles.fieldValue}>{studentData.fatherName}</Text>
                    <Text style={styles.fieldTitle}>Mother's Name:</Text>
                    <Text style={styles.fieldValue}>{studentData.motherName}</Text>
                    <Text style={styles.fieldTitle}>Gender:</Text>
                    <Text style={styles.fieldValue}>{studentData.gender}</Text>
                    <Text style={styles.fieldTitle}>Date of Birth:</Text>
                    <Text style={styles.fieldValue}>{studentData.dateOfBirth}</Text>
                    <Text style={styles.fieldTitle}>Department:</Text>
                    <Text style={styles.fieldValue}>{studentData.department}</Text>
                    <Text style={styles.fieldTitle}>Mobile Number:</Text>
                    <Text style={styles.fieldValue}>{studentData.mobileNumber}</Text>
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default StudentRegistration;
