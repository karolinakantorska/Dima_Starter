import React from "react";
// @mui
import { SvgIcon, Link } from '@mui/material';


// hooks


export const Mail = ({ email }: { email: string }) => {
    /*
        const handleClick = () => {
    
        };
    */
    function MailIcon(props: any) {
        return (
            <SvgIcon {...props}>
                <path d="M44.08,1.29H1.22V28.63H44.08V1.29h0Zm-1,1V27.09l-13.85-11.46L43.04,2.29h.04Zm-1.48,0L22.65,20.59,3.7,2.29H41.6ZM22.65,21.98l5.85-5.65,13.66,11.3H3.11l13.68-11.32,5.87,5.66Zm-6.59-6.36L2.22,27.07V2.29h.04l13.8,13.32Z" />
            </SvgIcon >
        );
    }

    return (
        <>
            <Link
                href={`mailto:${email}`}
                color={'text.secondary'}
            >
                <MailIcon
                    viewBox="0 0 45.3 29.0"
                    sx={{
                        height: '23px',
                        width: '36px',
                        cursor: 'pointer'
                    }}
                    aria-owns={email}
                />
            </Link>


        </>
    )
}
