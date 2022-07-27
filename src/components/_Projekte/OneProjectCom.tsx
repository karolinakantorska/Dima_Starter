import { m, } from 'framer-motion';
// @mui
import { Box, Table, TableBody, TableRow, TableCell, Typography, Stack, } from '@mui/material';

import useResponsive from '../../hooks/useResponsive';
import { ProjectType } from '../../utils/TS/interface';

import CarouselBasic3 from '../carousel/CarouselBasic3';
import FooterCom from '../_Reusable/FooterCom';

export function OneProjectCom({ project }: { project: ProjectType }) {
  const isDesktop = useResponsive('up', 'lg');
  const isSmallDesktop = useResponsive('up', 'lm');
  const isMiddle = useResponsive('down', 'lm');
  const isSmall = useResponsive('down', 'sm');
  //const isMobile = useResponsive('down', 'mobile');

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
    const time = project.finished ? 'bauzeit' : 'projektzeit';
    const arr = [
      { name: 'bauherr', data: project.client },
      { name: 'architekt', data: project.architect },
      { name: 'realisation', data: project.realisation },
      { name: time, data: new Date(project.year).toLocaleString('de-DE', { year: 'numeric' }) },
    ]
    if (project.size !== 0) {
      arr.push({ name: 'volumen', data: `ca. ${project.size.toString()} Mio. CHF` })
    }
    return arr
  }
  const containerBoxProps = {
    display: 'grid',
    gridTemplateColumns: isSmallDesktop ? '56fr 44fr' : '1fr ',
  }
  const boxProps = {
    pl: isDesktop ? 15 : isSmall ? 0 : 2,
    maxWidth: '730px'
  }
  const secondBoxProps = {
    pl: isDesktop ? 12.5 : isMiddle ? isSmall ? 0 : 2 : 10,
    pr: isDesktop ? 16 : isSmall ? 0 : 2,
    pt: isSmallDesktop ? 4 : 10,
    maxWidth: '730px'
  }
  /*
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
  );
  */
  const TableRowDesktop = ({ row }: any) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="td" sx={{ py: 3.9, width: '55%' }}>
        <Typography variant="body2" component="p" color="dima" >
          {row.name.toUpperCase()}
        </Typography>
      </TableCell>
      <TableCell align="left" sx={{ pl: 0, }} >
        <Typography variant="body2" component="p" color="text.primary">
          {row.data}
        </Typography>
      </TableCell>
    </TableRow>
  )

  if (project) {
    const photosCarusel = [project.photo, ...project.photos]
    return (
      <>

        <Stack
          component={m.div}
          {...variant}
          spacing={isDesktop ? 18.5 : isSmall ? 5 : 8}
        >
          <CarouselBasic3 photos={photosCarusel} />
          <Box
            sx={{ ...containerBoxProps }}
          >
            <Box sx={{ ...boxProps }}>
              <Table id="Project_Table">
                <TableBody>

                  {row2().map((row) => (<TableRowDesktop key={row.name} row={row} />))}
                </TableBody>
              </Table>
            </Box>
            <Box sx={{ ...secondBoxProps }}>
              <Typography variant="body2" component="h2" paragraph color="dima" sx={{ mb: 2.75 }}>
                {project.title.toUpperCase()}
              </Typography>
              {project.description.map((desc, i) => (
                <Typography key={i} variant="body1" component="div" paragraph color="text.primary" sx={{ mb: 1.5 }}>
                  {desc}
                </Typography>
              ))}
            </Box>
          </Box>
        </Stack>
        <FooterCom photoAuthor={project?.photoAuthor && project.photoAuthor} />
      </>
    )

  } else {
    return (
      <p>loading...</p>
    )
  }
}
/*
{isMobile && row2().map((row) => (<TableRowMobile key={row.name} row={row} />))}
                {!isMobile && row2().map((row) => (<TableRowDesktop key={row.name} row={row} />))}
                */