import React, { useState } from "react";
import {
    Box,
    Grid,
    FilledInput, 
    Select, MenuItem, 
    Dialog, DialogTitle, 
    DialogContent, 
    DialogActions, 
    Typography, 
    makeStyles, 
    Button, 
    IconButton, 
    CircularProgress,
} from '@material-ui/core'
import { Close as CloseIcon } from "@material-ui/icons";


const useStyles = makeStyles(theme => ({
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",

        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: "#fff",
        }
    },
    included: {
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    }
}));

const initState = {
    title: "",
    type: "Full time",
    companyName: "",
    companyUrl: "",
    location: "Remote",
    link: "",
    discription: "",
    skills: [],
};

export default (props) => {
    const [loading, setLoading] = useState(false)
    const [jobDetails, setJobDetails] = useState(initState);

    const handleChange = e => {
        e.persist();
        setJobDetails((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value
        }));
    };


    const addRemoveSkills = (skill) =>
        jobDetails.skills.includes(skill)
            ?
            //removing
            setJobDetails(oldState => ({
                ...oldState, skills: oldState.skills.filter((s) => s !== skill),
            }))
            :
            //adding
            setJobDetails(oldState => ({ ...oldState, skills: oldState.skills.concat(skill) }));

    const handleSubmit = async () => {
        for (const field in jobDetails) {
            if (typeof jobDetails[field] == 'string' && !jobDetails[field])
                return;
        }
        if (!jobDetails.skills.length)
            return;
        setLoading(true);
        await props.postJob(jobDetails);
        closeModal();
    };

    const closeModal = () => {
        setJobDetails(initState)
        setLoading(false);
        props.closeModal();
    }

    const classes = useStyles();
    const skills = [
        "Javascript",
        "React",
        "Node",
        "Vue",
        "Firebase",
        "MongoDB",
        "SQL",
        "Angular"
    ];
    return (
        <Dialog open={props.newJobModal} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Post Job
                    <IconButton onClick={closeModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2} >
                    <Grid items xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name="title"
                            value={jobDetails.title}
                            autoComplete="off"
                            placeholder="Job title *" disableUnderline fullWidth />
                    </Grid>
                    <Grid items xs={6}>
                        <Select
                            onChange={handleChange}
                            name="type"
                            value={jobDetails.type}
                            fullWidth
                            disableUnderline
                            variant="filled"
                        >
                            <MenuItem value="Full time">Full time</MenuItem>
                            <MenuItem value="Part time">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </Grid>
                    <Grid items xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name="companyName"
                            value={jobDetails.companyName}
                            autoComplete="off"
                            placeholder="Company Name *" disableUnderline fullWidth />
                    </Grid>
                    <Grid items xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name="companyUrl"
                            value={jobDetails.companyUrl}
                            autoComplete="off"
                            placeholder="Company url *" disableUnderline fullWidth />
                    </Grid>
                    <Grid items xs={6}>
                        <Select
                            onChange={handleChange}
                            fullWidth
                            name="location"
                            value={jobDetails.location}
                            disableUnderline
                            variant="filled"
                        >
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="In-Office">In-Office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid items xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name="link"
                            value={jobDetails.link}
                            autoComplete="off"
                            placeholder="Job link *" disableUnderline fullWidth />
                    </Grid>
                    <Grid items xs={12}>
                        <FilledInput
                            onChange={handleChange}
                            name="discription"
                            value={jobDetails.discription}
                            autoComplete="off"
                            placeholder="Job description *"
                            disableUnderline
                            fullWidth
                            multiline
                            rows={4} />
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills*</Typography>
                    <Box display="flex">
                        {skills.map((skill) => (
                            <Box onClick={() => addRemoveSkills(skill)} className={`${classes.skillChip} ${jobDetails.skills.includes(skill) && classes.included}`}
                                key={skill}> {skill} </Box>))}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box alignItems="center" color="red" width="100%" display="flex" justifyContent="space-between">
                    <Typography variant="caption">*Required field</Typography>
                    <Button onClick={handleSubmit}
                        variant="contained"
                        disableElevation
                        color="primary"
                        disabled={loading}
                    >
                        {loading ? (<CircularProgress color="secondary" size={22} />
                        ) : (
                            "Post job"
                        )}
                    </Button>
                </Box>
            </DialogActions>
        </Dialog >
    )
}