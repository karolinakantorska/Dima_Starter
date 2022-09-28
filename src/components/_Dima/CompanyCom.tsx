import useResponsive from '../../hooks/useResponsive';



export function CompanyCom() {
  //const isDesktop = useResponsive('up', 'lm');
  const isMiddle = useResponsive('down', 'md');
  const isSmall = useResponsive('down', 'sm');

  const pl = isSmall ? 0 : isMiddle ? 4 : 5.5;
  const py = isMiddle ? 0 : 2;
  const pb = isSmall ? 4 : py;
  //const { query } = useRouter();

  return (
    <p>Unternehmen</p>
  )
};




