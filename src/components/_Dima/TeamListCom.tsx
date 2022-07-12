
// @mui

import { Box, } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';
import { team } from 'src/_mock/team/team';

// hooks
import useResponsive from '../../hooks/useResponsive';

import { SiteTitle } from '../_Reusable/SiteTitle';
import { CardPersonCom } from './CardPersonCom';


// TODO use location instead use route
export function TeamListCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'lg');
  const isMiddle = useResponsive('up', 'lm');
  const isSmall = useResponsive('up', 'md');
  const gtc = isDesktop ? 'repeat(4, 1fr)' : isMiddle ? 'repeat(3, 1fr)' : isSmall ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'


  //const { query } = useRouter();

  return (
    <>
      <SiteTitle text={layoutHeader.teams} />
      <Box
        display="grid"
        gridTemplateColumns={gtc}
        //justifyItems='stretch'
        //gridAutoFlow="dense"
        columnGap="11px"
        rowGap="20px"
        sx={{ mt: 6 }}
      >
        {team.map((person) => <CardPersonCom key={person.id} person={person} />)}
      </Box>

    </>
  )
}
