import React from 'react';
import { Box, Typography, Container, Button, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
// @ts-ignore
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
const Link: any = ScrollLink;

const Hero: React.FC = () => {
  const theme = useTheme();

  // Particle options for animated background
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    particles: {
      number: { value: 40 },
      color: { value: '#64ffda' },
      shape: { type: 'circle' },
      opacity: { value: 0.2 },
      size: { value: 3 },
      move: { enable: true, speed: 1, direction: 'none' as const, outModes: 'out' as const },
      links: { enable: true, color: '#64ffda', opacity: 0.2, width: 1 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Live Particles Background */}
      {/* <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        // @ts-ignore
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} style={{ position: 'absolute' }} />
      </Box> */}
      {/* Decorative Gradient Circle */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 40, md: 80 },
          right: { xs: -120, md: -180 },
          width: { xs: 250, md: 400 },
          height: { xs: 250, md: 400 },
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #64ffda 0%, #0a192f 100%)',
          opacity: 0.15,
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, flex: 1 }}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  mb: { xs: 3, md: 0 },
                }}
              >
                {/* Glowing animated border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -10,
                    left: -10,
                    width: { xs: 160, md: 200 },
                    height: { xs: 160, md: 200 },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #64ffda 0%, transparent 70%)',
                    filter: 'blur(8px)',
                    zIndex: 0,
                    animation: 'pulseGlow 2s infinite',
                    '@keyframes pulseGlow': {
                      '0%': { opacity: 0.7 },
                      '50%': { opacity: 0.2 },
                      '100%': { opacity: 0.7 },
                    },
                  }}
                />
                <Avatar
                  src="/profile.png"
                  alt="Abhishek Kumar"
                  sx={{
                    width: { xs: 140, md: 180 },
                    height: { xs: 140, md: 180 },
                    boxShadow: 6,
                    border: `4px solid ${theme.palette.primary.main}`,
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ flex: 3, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h6"
                color="primary"
                sx={{ mb: 2, fontFamily: 'monospace' }}
              >
                Hi, my name is
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  color: 'text.primary',
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '4rem' },
                }}
              >
                Abhishek Kumar.
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                I build things for the web.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: '600px',
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                }}
              >
                I'm a Frontend Developer and Cybersecurity enthusiast specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {/* @ts-ignore */}
                <Link to="projects" spy={true} smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      boxShadow: '0 0 16px 2px #64ffda, 0 0 32px 4px #64ffda33',
                      borderRadius: 3,
                      transition: 'box-shadow 0.3s',
                      '&:hover': {
                        boxShadow: '0 0 32px 8px #64ffda, 0 0 64px 16px #64ffda66',
                        background: 'linear-gradient(90deg, #64ffda 60%, #0a192f 100%)',
                        color: '#0a192f',
                      },
                    }}
                  >
                    View My Work
                  </Button>
                </Link>
                {/* @ts-ignore */}
                <Link to="contact" spy={true} smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{
                      boxShadow: '0 0 12px 2px #64ffda, 0 0 24px 4px #64ffda33',
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: '#64ffda',
                      transition: 'box-shadow 0.3s',
                      '&:hover': {
                        boxShadow: '0 0 32px 8px #64ffda, 0 0 64px 16px #64ffda66',
                        background: 'linear-gradient(90deg, #0a192f 0%, #64ffda 100%)',
                        color: '#fff',
                        borderColor: '#64ffda',
                      },
                    }}
                  >
                    Contact Me
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 
