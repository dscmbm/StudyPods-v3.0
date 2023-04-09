import React, { useState, useEffect } from "react";
import { Box, Button, CircularProgress, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/Header/SearchBar";
import JobCard from "./components/Header/job/JobCard";
import NewJobModal from "./components/Header/job/NewJobModal";
// import jobData from './dummyData'
import { firestore, app } from "./firebase/config";
import { close as closeIcon } from '@material-ui/icons'
import ViewJobModal from "./components/Header/job/ViewJobModal";

export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [newJobModal, setNewJobModal] = useState(false);
  const [viewJob, setViewJob] = useState({});

  const fetchJobs = async () => {
    setLoading(true);
    setCustomSearch(false)
    const req = await firestore
      .collection('jobs')
      .orderBy('postedOn', "desc")
      .get();
    const tempJobs = req.docs.map((job) => ({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() }));
    setJobs(tempJobs);
    setLoading(false);
  };

  const fetchJobsCustom = async jobSearch => {
    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
      .collection('jobs')
      .orderBy('postedOn', "desc")
      .where("location", "==", jobSearch.location)
      .where("type", "==", jobSearch.type)
      .get();
    const tempJobs = req.docs.map((job) => ({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() }));
    setJobs(tempJobs);
    setLoading(false);
  }

  const postJob = async jobDetail => {
    await firestore.collection('jobs').add({
      ...jobDetail,
      postedOn: app.firestore.FieldValue.serverTimestamp()
    });
    fetchJobs();
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return(

    <ThemeProvider theme={theme}>
    <Header openNewJobModal={() => setNewJobModal(true)} />
    <NewJobModal closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} postJob={postJob} />
    <ViewJobModal job = {viewJob} closeModal={ () => setViewJob({})} />
    <Box mb={3}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar fetchJobsCustom={fetchJobsCustom} />

          {
            loading ? (
              <Box display="flex" justifyContent="center"> <CircularProgress /> </Box>
            ) : ( 
              <>
                {customSearch && (
                  <Box my={2} display="flex" justifyContent="flex-end">
                    <Button onClick={fetchJobs}>
                      <closeIcon size={20} />
                      Custom Search
                    </Button>
                  </Box>
                )}
        {jobs.map((job) => ( 
                  <JobCard open={() => setViewJob(job)} key={job.id} {...job} />
                  ))}
              </>
              )}
    </Grid>
      </Grid>
    </Box>
  </ThemeProvider>
)};
