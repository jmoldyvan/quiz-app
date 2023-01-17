import React from 'react'
import { Button, TextField, CardContent, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import useForm from '../hooks/useForm'
import Center from './Center'

const getFreshModel = () => ({
    name: '',
    email: ''
})

export default function Login(){

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const login = e => {
        e.preventDefault();
    }

    return (
        <Center>
            <Card sx ={{ width: 400}}>
                <CardContent sx={{textAlign: 'center'}}>
                    <Typography variant ="h3" sx = {{my:3}}>
                        Quiz App
                    </Typography>
                    <Box sx={{
                        '&	.MuiTextField-root':{
                            margin:1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate onSubmit={login}>
                            <TextField 
                                label = "Email"
                                name = "email"
                                value = {values.email}
                                onChange = {handleInputChange}
                                variant = "outlined"
                            />
                            <TextField 
                                label = "Name"
                                name = "name"
                                value = {values.name}
                                onChange = {handleInputChange}
                                variant = "outlined"
                            />
                            <Button
                                type = "submit"
                                variant = 'contained'
                                size = 'large'
                                sx={{
        
                                        width: '90%'
                                    
                                }}>START</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}