import React from 'react';
import Link from 'next/link';
// @mui
import { IconButton, } from '@mui/material';

// hooks
import useResponsive from '../../hooks/useResponsive';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';


export function EditDeleteIconCom({
    handleOpen,
    editURL
}: {
    handleOpen: (e: any) => void,
    editURL: string | ((e: any) => void)
}) {

    const isMiddle = useResponsive('down', 'md');
    const propsIcon = {
        fontSize: isMiddle ? 20 : 'middle'
    };
    const propsIconButton = {
        backgroundColor: 'rgba(255,255,255,0.2)',
        mr: '18px',
        mt: '-10px',
        mb: '10px',
        color: 'background.default',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.6)',
        },
        '&:focus': {
            backgroundColor: 'rgba(255,255,255,0.6)',
        }
    }
    return (
        <>
            {(typeof editURL === 'string')
                ? <Link href={editURL} passHref >
                    <IconButton size='small' aria-label={'edit'} sx={{ ...propsIconButton }}>
                        <EditRoundedIcon sx={{ ...propsIcon }} />
                    </IconButton>
                </Link>
                : <IconButton size='small' onClick={(e) => editURL(e)} aria-label={'edit'} sx={{ ...propsIconButton }}>
                    <EditRoundedIcon sx={{ ...propsIcon }} />
                </IconButton>
            }
            <IconButton
                size='small'
                aria-label={'delete'}
                onClick={(e) => handleOpen(e)}
                sx={{ ...propsIconButton }}
            >
                <DeleteIcon sx={{ ...propsIcon }} />
            </IconButton>
        </>
    )
}
