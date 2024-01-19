
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
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobDetailsPromises = jobIds.slice(startIndex, startIndex + 6).map(async (jobId) => {
          const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`);
          return response.json();
        });

        const newJobsData = await Promise.all(jobDetailsPromises);
        setJobs([...jobs, ...newJobsData]);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

}, [jobIds, startIndex]);

  const loadMoreJobs = () => {
    setStartIndex(startIndex + 6);
  };
return (
    <>
      <div>Hacker News Jobs Board</div>
      {jobs.map((job, index) => (
        <div key={index}>
          <h6 className='title'>{job.title}</h6>
          <p>By: {job.by}</p>
        </div>
      ))}
      <button onClick={loadMoreJobs}>Load More</button>
    </>
  );
}
