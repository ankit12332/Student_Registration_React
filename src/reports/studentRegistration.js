    import React from 'react';
    import { PDFViewer ,Document, Page, Text } from '@react-pdf/renderer';

    const StudentRegistration = ({ studentData }) => {
        return (
        <PDFViewer width="100%" height="600px">
        <Document>
            <Page>
            <Text>Student Name: {studentData.studentName}</Text>
            <Text>Email: {studentData.email}</Text>
            <Text>Father's Name: {studentData.fatherName}</Text>
            <Text>Mother's Name: {studentData.motherName}</Text>
            <Text>Gender: {studentData.gender}</Text>
            <Text>Date of Birth: {studentData.dateOfBirth}</Text>
            <Text>Department: {studentData.department}</Text>
            <Text>Mobile Number: {studentData.mobileNumber}</Text>
            </Page>
        </Document>
        </PDFViewer>
        );
    };

    export default StudentRegistration;
