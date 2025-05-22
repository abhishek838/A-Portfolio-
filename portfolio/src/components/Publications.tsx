import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ArticleIcon from '@mui/icons-material/Article';

const Publications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publications = [
    {
      title: 'Blockchain Encryption using Biometric Authentication',
      conference: 'Sixth International Conference on AI and Soft Computing (AISC 2022)',
      description:
        'Research paper exploring the integration of blockchain technology with biometric authentication systems for enhanced security and privacy.',
      link: '#',
    },
  ];

  return (
    <Box
      id="publications"
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
            Publications
          </Typography>
          <Grid container spacing={4}>
            {publications.map((pub, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <ArticleIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box>
                      <Typography variant="h5" color="primary" gutterBottom>
                        {pub.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        gutterBottom
                      >
                        {pub.conference}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {pub.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    Read Paper
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Publications; 