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
    const time = (project.phase === 'Gebaut')
      ? `${new Date(project.startYear).toLocaleString('de-DE', { year: 'numeric' })} -
         ${new Date(project.year).toLocaleString('de-DE', { year: 'numeric' })}`
      : project.phase;
    const arr = [
      { name: 'bauherr', data: project.client },
      { name: 'architekt', data: project.architect },
      { name: 'realisation', data: project.realisation },
      {
        name: 'bauzeit',
        data: time
      },
    ]
    if (project.size !== 0) {
      arr.push({ name: 'volumen', data: `ca. ${project.size.toString()} Mio. CHF` })
    }
    return arr
  }
  const propsContent = {
    mt: isSmall ? 6 : 0,
  };
  const propsContainerBox = {
    display: 'grid',
    gridTemplateColumns: isSmall ? '1fr' : '56fr 44fr',
  };
  const propsBox = {
    pl: isDesktop ? 15 : isSmall ? 0 : 2,
    maxWidth: '730px'
  };
  const propsSecondBox = {
    pl: isSmall ? 0 : isDesktop ? 10 : 6,
    pr: isSmall ? 0 : isDesktop ? 16 : 2,
    pt: isSmall ? 8 : isDesktop ? 4 : 1.6,
    maxWidth: '730px'
  };
  const propsTableCell = {
    py: isSmall ? 1.2 : isDesktop ? 3.9 : '3%',
    pl: isSmallDesktop ? 2 : 0,
    width: isSmall ? '30%' : isSmallDesktop ? '55%' : '40%',
  };
  const propsTableCell2 = {
    py: isSmall ? 1.2 : isDesktop ? 3.9 : '3%',
    pl: 0
  }

  const TableRowMobile = ({ row }: any) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="td" sx={{ pl: 0, pr: 0, pt: 1, pb: 1, width: '100%' }}>
        <Typography sx={{ pl: 0, }} variant="body2" component="p" color="dima" >
          {row.name.toUpperCase()}
        </Typography>
        <Typography sx={{ pl: 0, pt: 1, }} variant="body2" component="p" color="text.primary">
          {row.data}
        </Typography>
      </TableCell>
    </TableRow >
  );

  const TableRowDesktop = ({ row }: any) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="td" sx={{ ...propsTableCell }}>
        <Typography variant="body2" component="p" color="dima" >
          {row.name.toUpperCase()}
        </Typography>
      </TableCell>
      <TableCell align="left" sx={{ ...propsTableCell2 }} >
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
          spacing={isDesktop ? 18.5 : 10}
          sx={{ ...propsContent }}
        >
          <CarouselBasic3 photos={photosCarusel} />
          <Box
            sx={{ ...propsContainerBox }}
          >
            <Box sx={{ ...propsBox }}>
              <Table id="Project_Table">
                <TableBody>
                  {!isMobile && row2().map((row) => (<TableRowDesktop key={row.name} row={row} />))}
                  {isMobile && row2().map((row) => (<TableRowMobile key={row.name} row={row} />))}
                </TableBody>
              </Table>
            </Box>
            <Box sx={{ ...propsSecondBox }}>
              <Typography variant="body2" component="h2" paragraph color="dima" sx={{ mb: 2.75 }}>
                {project.title.toUpperCase()}
              </Typography>
              {project.description.map((desc, i) => (
                <Typography key={i} variant="body1" component="div" paragraph color="text.primary" sx={{ mb: 1.5 }}>
                  {desc}
                </Typography>
              ))}
              {project.photoAuthor && <Typography
                variant="body2"
                component="span"
                color="text.secondary"
              >
                &#169;Photography: {`${project.photoAuthor}`}
              </Typography>}
            </Box>
          </Box>
        </Stack>
        <FooterCom />
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