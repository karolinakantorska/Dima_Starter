import React from 'react';

import NextLink from 'next/link';



import { Box, } from '@mui/material';

export default function DimaLetterCom({ x, y }: { x: number, y: number }) {

    const PARTNER = '#EF7B10';
    const DIMA = '#DADADA';

    return (
        <NextLink href="/">
            <Box
                sx={{
                    width: x,
                    height: y,
                    cursor: 'pointer',
                }}>

                <svg
                    xmlns="http://www.w3.org/2000/svg"

                    width="100%"
                    height="100%"
                    viewBox="0 0 150 80"

                >

                    <g>
                        <g  >

                            <path
                                //class="st0"
                                fill={DIMA}
                                d="M41.12,32.26v-0.29c0-0.82,0.67-1.49,1.49-1.49h1.23H54.5c0.82,0,1.49,0.67,1.49,1.49l0,10.2v0.39
			c0,0.82,0.67,1.49,1.49,1.49h0.29l47.66,0l0.6,0c0.82,0,1.49-0.67,1.49-1.49v-0.29l-0.03-7.97c0-1.16-0.58-2.17-1.46-2.78
			l-10.54-7.38c-0.56-0.4-1.25-0.65-1.99-0.65l-40.87,0c-1.17,0-2.17-0.67-2.86-1.43l-8.28-8.87c-0.13-0.19-0.21-0.42-0.21-0.67
			c0-0.65,0.53-1.19,1.18-1.19h54.08c1.29,0,2.48,0.41,3.46,1.1l17.17,12.02c1.51,1.11,2.48,2.89,2.48,4.91l0.01,23.17
			c0,1.87-1.52,3.39-3.39,3.39H42.91h-0.29c-0.82,0-1.49-0.67-1.49-1.49L41.12,32.26z"/>

                            <path
                                //class="st1"
                                fill={PARTNER}
                                d="M118.15,83.52c0.82,0,1.49-0.67,1.49-1.49V70.73V69.5c0-0.82-0.67-1.49-1.49-1.49h-0.29H13.94h-0.29
			c-0.82,0-1.49,0.67-1.49,1.49v1.22v11.31c0,0.82,0.67,1.49,1.49,1.49H118.15z"/>
                        </g>
                    </g>
                </svg>
            </Box>
        </NextLink>

    );
}
