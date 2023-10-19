import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import projects from '../../assets/icons/projects.svg';
import tasks from '../../assets/icons/tasks.svg';
import group from '../../assets/icons/group.svg';

const drawerWidth = 90;

function SideBar() {

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'primary.dark' },
      }}
      open
    >
      <List>
        <ListItem key={'Logo'} disablePadding >
          <ListItemButton >
            <Box style={{ display: 'flex', alignItems: 'center' }} mb={12}>
              <ListItemText primary={<Typography variant='body2' color={'text.secondary'} align='center'>Logo Here</Typography>} />
            </Box>
          </ListItemButton>
        </ListItem>
        <ListItem key={'projects'} disablePadding >
          <ListItemButton>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} my={2}>
              <img src={projects} alt="Projects" width={'31px'} height={'31px'} />
              <ListItemText primary={<Typography variant='body2' color={'text.secondary'} align='center'>My Projects</Typography>} />
            </Box>
          </ListItemButton>
        </ListItem>
        <ListItem key={'tasks'} disablePadding >
          <ListItemButton>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} my={2}>
              <img src={tasks} alt="Projects" width={'24px'} height={'31px'} />
              <ListItemText primary={<Typography variant='body2' color={'text.secondary'} align='center'>My Tasks</Typography>} />
            </Box>
          </ListItemButton>
        </ListItem>
        <ListItem key={'clients'} disablePadding >
          <ListItemButton>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} my={2}>
              <img src={group} alt="Projects" width={'31px'} height={'31px'} />
              <ListItemText primary={<Typography variant='body2' color={'text.secondary'} align='center'>My Clients</Typography>} />
            </Box>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideBar;
