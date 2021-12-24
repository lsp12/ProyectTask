import { Grid } from '@mui/material'
import React from 'react'
import FormTasks from '../../Components/Forms/FormTasks/FormTasks'
import Layout from '../../Components/Layout/Layout'

const Tasks = () => {
    return (
        <Layout>
            <Grid item xs={12} md={4}>
                <FormTasks />
            </Grid>
            <Grid item xs={12} md={8}>

            </Grid>
        </Layout>
    )
}

export default Tasks
