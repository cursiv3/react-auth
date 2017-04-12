import React from 'react'
import { Card, CardTitle } from 'material-ui/Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const HomePage = () => (
    <MuiThemeProvider>
        <Card className="container">
            <CardTitle title="Sample React Authentication" subtitle="This is the where the home page would be." />
        </Card>
    </MuiThemeProvider>
)

export default HomePage;