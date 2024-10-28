import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AdminContainer = styled.div`
  padding: 20px;
  background-color: #f1ede1;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #3b1112;
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
`;

const TableHeader = styled.th`
  background-color: #3b1112;
  color: white;
  padding: 10px;
  text-align: right; /* Align text to the right for Arabic */
`;

const TableRow = styled.tr`
  background-color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: right; /* Align text to the right for Arabic */
`;

const Image = styled.img`
  width: 100px;
  height: 75px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer; /* Indicate that the image is clickable */
`;

const AdminPage = () => {
  const [reports, setReports] = useState([]);

  // Function to fetch reports from the backend
  const fetchReports = async () => {
    try {
      const response = await axios.get('https://athar-be.vercel.app/api/reports'); // Fetch reports from the backend
      setReports(response.data); // Update the state with the fetched reports
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  // Use useEffect to fetch reports when the component mounts
  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <AdminContainer>
      <Title>صفحة الأدمن - عرض البلاغات</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>وصف</TableHeader>
            <TableHeader>الصورة</TableHeader>
            <TableHeader>العنوان</TableHeader>
            <TableHeader>تاريخ الإرسال</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {reports.map((report) => (
            <TableRow key={report._id}>
              <TableData>{report.description}</TableData>
              <TableData>
                {report.image && (
                  <Image
                    src={`https://athar-be.vercel.app/uploads/${report.image}`}
                    alt="Report"
                    onClick={() => window.open(`https://athar-be.vercel.app/uploads/${report.image}`, '_blank')}
                  />
                )}
              </TableData>
              <TableData>{report.address}</TableData>
              <TableData>{new Date(report.createdAt).toLocaleDateString()}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </AdminContainer>
  );
};

export default AdminPage;
