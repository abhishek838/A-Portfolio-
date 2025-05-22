import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  IconButton,
  Link,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'mail.abhikumar2704@gmail.com',
      link: 'mailto:mail.abhikumar2704@gmail.com',
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '+91 6204714105',
      link: 'tel:+916204714105',
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      value: 'github.com/abhishek838',
      link: 'https://github.com/abhishek838',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            Get In Touch
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <IconButton
                    color="primary"
                    sx={{ fontSize: 40, mb: 2 }}
                  >
                    {info.icon}
                  </IconButton>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {info.label}
                  </Typography>
                  <Link
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="text.secondary"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {info.value}
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              mt: 6,
              textAlign: 'center',
            }}
          >
            <Typography variant="body1" color="text.secondary">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 