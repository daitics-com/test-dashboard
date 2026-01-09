import React, { useState, useEffect } from 'react'

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    color: '#e0e0e0',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '2rem 3rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    maxWidth: '500px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  infoGrid: {
    display: 'grid',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  infoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem 1rem',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  label: {
    color: '#888',
    fontSize: '0.9rem',
  },
  value: {
    color: '#4facfe',
    fontWeight: '500',
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(46, 213, 115, 0.15)',
    border: '1px solid rgba(46, 213, 115, 0.3)',
    borderRadius: '20px',
    color: '#2ed573',
    fontSize: '0.9rem',
    marginTop: '1.5rem',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#2ed573',
    animation: 'pulse 2s infinite',
  },
  footer: {
    marginTop: '2rem',
    fontSize: '0.8rem',
    color: '#666',
  },
}

function App() {
  const [buildTime, setBuildTime] = useState(null)

  useEffect(() => {
    setBuildTime(new Date().toISOString())
  }, [])

  const appVersion = import.meta.env.VITE_APP_VERSION || '1.0.0'
  const environment = import.meta.env.VITE_ENVIRONMENT || 'development'
  const buildId = import.meta.env.VITE_BUILD_ID || 'local'

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
      <div style={styles.card}>
        <h1 style={styles.title}>Test Dashboard</h1>
        <p>CI/CD Pipeline Verification Application</p>

        <div style={styles.infoGrid}>
          <div style={styles.infoItem}>
            <span style={styles.label}>Version</span>
            <span style={styles.value}>{appVersion}</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Environment</span>
            <span style={styles.value}>{environment}</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Build ID</span>
            <span style={styles.value}>{buildId}</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Loaded At</span>
            <span style={styles.value}>
              {buildTime ? new Date(buildTime).toLocaleTimeString() : '-'}
            </span>
          </div>
        </div>

        <div style={styles.statusBadge}>
          <span style={styles.dot}></span>
          Application Healthy
        </div>

        <p style={styles.footer}>
          Daitics Infrastructure - GitOps Pipeline Test
        </p>
      </div>
    </div>
  )
}

export default App