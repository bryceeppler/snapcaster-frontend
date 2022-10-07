import React from 'react'
import { Switch, Container } from '@mui/material'
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'

export default function DarkModeSwitch({setMode, mode}) {
  return (
        
        <Container
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                paddingTop: 2,  
              }}
            >
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
              <ModeNightIcon />
            </Container>
  )
}
