import { useState } from 'react';
import axios from 'axios';
import {
  TextField, Button, Select, MenuItem, FormControl, InputLabel, Box, Typography, Paper
} from '@mui/material';
import { motion } from 'framer-motion';

const AddJob = () => {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    appliedDate: new Date().toISOString().split('T')[0],
    link: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/jobs', formData);
      window.location = '/';
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 500,
          mx: 'auto',
          mt: 5,
          p: 4,
          borderRadius: '20px',
          background: '#fdfdfd',
        }}
      >
        <Typography variant="h5" gutterBottom align="center" fontWeight="bold">
          Add Job Application
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            variant="outlined"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              label="Status"
            >
              <MenuItem value="Applied">Applied</MenuItem>
              <MenuItem value="Interview">Interview</MenuItem>
              <MenuItem value="Offer">Offer</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            label="Date"
            type="date"
            name="appliedDate"
            value={formData.appliedDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Job Link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #2196f3, #21cbf3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #1976d2, #00bcd4)',
              }
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default AddJob;
