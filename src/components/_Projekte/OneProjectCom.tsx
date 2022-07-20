import { m, } from 'framer-motion';
// @mui
import { Box, Table, TableBody, TableRow, TableCell, Typography, Stack, } from '@mui/material';

import useResponsive from '../../hooks/useResponsive';
import { ProjectType } from '../../utils/TS/interface';
import { firstLettersBig, } from '../../utils/Text/textUtils';
import CarouselBasic3 from '../carousel/CarouselBasic3';
import LoadingScreen from '../LoadingScreen';

export function OneProjectCom({ project }: { project: ProjectType }) {
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const isMobile = useResponsive('down', 'mobile');

  const transition = {
    type: 'tween',
    ease: 'linear',
    duration: 1,
  }
  const variant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: transition,
  };
  const row2 = () => {
    const arr = [
      { name: 'realisation', data: project.generalConstr },
      { name: 'bauprojekt', data: project.architect },
      { name: 'standort', data: project.location },
      { name: 'bauherschaft', data: project.client },
      { name: 'bauzeit', data: new Date(project.year).toLocaleString('de-DE', { year: 'numeric', month: 'long', }) },
    ]
    if (project?.cooperation) {
      arr.push({ name: project.cooperation.service, data: project.cooperation.company })
    }
    return arr
  }
  console.log('project.year', new Date(project.year))

  const TableRowMobile = ({ row }: any) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="td" sx={{ pr: 0, pt: 5, pb: 5, width: '100%' }}>
        <Typography sx={{ pl: 1, }} variant="body2" component="p" color="dima" >
          {row.name.toUpperCase()}
        </Typography>
        <Typography sx={{ pl: 1, pt: 2, }} variant="body2" component="p" color="text.primary">
          {row.data}
        </Typography>
      </TableCell>
    </TableRow>
  )
  const TableRowDesktop = ({ row }: any) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="td" sx={{ py: 4, }}>
        <Typography variant="body2" component="p" color="dima" >
          {row.name.toUpperCase()}
        </Typography>
      </TableCell>
      <TableCell align="left" sx={{ pl: 6, }} >
        <Typography variant="body2" component="p" color="text.primary">
          {row.data}
        </Typography>
      </TableCell>
    </TableRow>
  )

  if (project) {
    const photosCarusel = [project.photo, ...project.photos]
    return (
      <Stack
        component={m.div}
        {...variant}
        spacing={isDesktop ? 18.5 : isSmall ? 5 : 8}
      >
        <CarouselBasic3 photos={photosCarusel} />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr ',
            columnGap: '63px',
          }}
        >
          <Box sx={isSmall ? { pl: 0 } : { pl: 15 }}>
            <Table id="Project_Table">
              <TableBody>
                {isMobile && row2().map((row) => (<TableRowMobile key={row.name} row={row} />))}
                {!isMobile && row2().map((row) => (<TableRowDesktop key={row.name} row={row} />))}
              </TableBody>
            </Table>
          </Box>
          <Box sx={isSmall ? { pl: 0, pt: 0, } : { pl: 5, pt: 5, pr: 15 }}>
            <Typography variant="body2" component="h2" paragraph color="dima" sx={{ mb: 2.75 }}>
              {firstLettersBig(project.title)}
            </Typography>
            {project.description.map((desc, i) => (
              <Typography key={i} variant="body1" component="div" paragraph color="text.primary" sx={{ mb: 1.5 }}>
                {desc}
              </Typography>
            ))}
          </Box>
        </Box>
      </Stack>
    )

  } else {
    return (
      <LoadingScreen />
    )
  }
}
