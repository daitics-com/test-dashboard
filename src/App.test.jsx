import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the title', () => {
    render(<App />)
    expect(screen.getByText('Test Dashboard')).toBeInTheDocument()
  })

  it('shows healthy status', () => {
    render(<App />)
    expect(screen.getByText('Application Healthy')).toBeInTheDocument()
  })

  it('displays version information', () => {
    render(<App />)
    expect(screen.getByText('Version')).toBeInTheDocument()
  })

  it('displays environment information', () => {
    render(<App />)
    expect(screen.getByText('Environment')).toBeInTheDocument()
  })
})