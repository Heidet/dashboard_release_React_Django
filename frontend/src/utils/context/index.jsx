import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProviderLocal = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ProjetsContext = createContext()


export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <ProjetsContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </ProjetsContext.Provider>
  )
}
