import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, Select, MenuItem, FormControl, InputLabel, TextField, Typography, Box
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { motion } from 'framer-motion';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/jobs');
      setJobs(data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    }
  };

  const updateJob = async (id, updateData) => {
    try {
      await axios.put(`http://localhost:5000/api/jobs/${id}`, updateData);
      fetchJobs();
    } catch (err) {
      console.error('Error updating job:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error('Error deleting job:', err);
    }
  };

  const handleStatusChange = (id, status) => updateJob(id, { status });
  const handleDateChange = (id, appliedDate) => updateJob(id, { appliedDate });

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.status === filter);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Box sx={{ maxWidth: '90%', mx: 'auto', mt: 4 }}>
        <Typography variant="h5" align="center" fontWeight="bold" mb={2}>
          📋 Job Application Tracker
        </Typography>

        <FormControl sx={{ mb: 3, minWidth: 200 }} size="small">
          <InputLabel>Status</InputLabel>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            label="Status"
            sx={{ borderRadius: 2 }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="Applied">Applied</MenuItem>
            <MenuItem value="Interview">Interview</MenuItem>
            <MenuItem value="Offer">Offer</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>

        <TableContainer
          component={Paper}
          elevation={4}
          sx={{
            borderRadius: 4,
            maxHeight: 400,
            overflowY: 'auto',
            overflowX: 'auto'
          }}
        >
          <Table stickyHeader>
            <TableHead sx={{ backgroundColor: '#e3f2fd' }}>
              <TableRow>
                <TableCell><strong>Company</strong></TableCell>
                <TableCell><strong>Role</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredJobs.map(({ _id, company, role, status, appliedDate }) => (
                <TableRow key={_id} hover>
                  <TableCell>{company}</TableCell>
                  <TableCell>{role}</TableCell>
                  <TableCell>
                    <Select
                      value={status}
                      onChange={(e) => handleStatusChange(_id, e.target.value)}
                      size="small"
                      sx={{ borderRadius: 2, minWidth: 120 }}
                    >
                      <MenuItem value="Applied">Applied</MenuItem>
                      <MenuItem value="Interview">Interview</MenuItem>
                      <MenuItem value="Offer">Offer</MenuItem>
                      <MenuItem value="Rejected">Rejected</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="date"
                      value={new Date(appliedDate).toISOString().split('T')[0]}
                      onChange={(e) => handleDateChange(_id, e.target.value)}
                      size="small"
                      sx={{ borderRadius: 2 }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(_id)}>
                      <Delete color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </motion.div>
  );
};

export default JobList;
