import React, { useState } from "react";
// @mui
import { SvgIcon, Link } from '@mui/material';
import { Person } from 'src/utils/TS/interface';

// hooks
import useResponsive from '../../hooks/useResponsive';

export const Mail = ({ email }: { email: string }) => {

    const handleClick = () => {

    };

    function MailIcon(props: any) {
        return (
            <SvgIcon {...props}>
                <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" />
            </SvgIcon >
        );
    }

    return (
        <>
            <Link
                href={`mailto:${email}`}
                color={'text.secondary'}
            >
                <MailIcon viewBox="0 0 122.88 88.86"
                    sx={{
                        height: '27px',
                        width: '43px',
                        cursor: 'pointer'
                    }}
                    aria-owns={email}
                />
            </Link>


        </>
    )
}
