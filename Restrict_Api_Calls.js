
import { useEffect, useState } from 'react';

export default function App() {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [startIndex, setStartIndex] = useState(6);

  useEffect(() => {
    const fetchJobIds = async () => {
      try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
        const jobIdsData = await response.json();
        setJobIds(jobIdsData.slice(startIndex)); // Get the first six job IDs
      } catch (error) {
        console.error('Error fetching job IDs:', error);
      }
    };

    fetchJobIds();
  }, []);
