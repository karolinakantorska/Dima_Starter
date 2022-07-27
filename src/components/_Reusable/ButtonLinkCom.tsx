import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link'

interface PropsButtonLink {
    href: string,
    text: string,
}
export default function ButtonLinkCom({ href, text }: PropsButtonLink) {
    return (
        <Link href={href} passHref>
            <Button variant="text">{text}</Button>
        </Link>
    )
}