import { Procent } from "../TS/interface"

export const workProcent = (procentMin: Procent, procent: Procent) => {
    if (procentMin === 'keins') {
        if (procent === 'keins') {
            return ''
        }
        return ' - ' + procent + '%'
    }
    else {
        if (procent === 'keins') {
            return 'ab ' + procentMin + '%'
        }
        return procentMin + '-' + procent + '%'
    }
}