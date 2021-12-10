import React from 'react'
import {TextField, Typography, Grid, Button , FormControl , InputLabel, Select, MenuItem} from '@material-ui/core'
import useStyles from './styles'

const Form = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="subtitle2" align="center" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value="Buisness">Buisness</MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item sx={6}>
                <TextField type="number" label="Amount" fullWidth/>
            </Grid>
            <Grid item sx={6}>
                <TextField type="date" label="Date" fullWidth/>
            </Grid>
            <Button className={classes.button} fullWidth variant="outlined" color="primary">Create</Button>
        </Grid>
    )
}

export default Form
