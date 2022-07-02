import { Services, ObjektType } from '../TS/interface';
export const firstLettersBig = (text: string) => text.replace(/(^[A-Za-züäö]|\s[A-Za-züäö])/g, m => m.toUpperCase());

export const writeInGerman = (text: Services | ObjektType | string) => {
    switch (text) {
        case 'TU':
            return 'Totalunternehmung'
        case 'GP':
            return 'Generalplanung'
        case 'MFH':
            return 'Mehrfamilienhäusern'
        case 'Gewerbe':
            return 'Gewerbebauten'
        case 'Büro':
            return 'Bürohäusern'
        case 'EFH':
            return 'Einfamilienhäusern'
        case 'Gesundheits':
            return 'Mehrfamilienhäusern'
        case 'Sport':
            return 'Sportanlagen'
        case 'Multifunktional':
            return 'Multifunktionalbauten'
        default:
            return text;
    }
}
export const writeServiceInGerman = (text: Services | ObjektType) => {
    switch (text) {
        case 'TU':
            return 'Totalunternehmung'
        case 'GP':
            return 'Generalplanung'
        default:
            return text;
    }
}
export const writeObiektTypeInGerman = (text: Services | ObjektType) => {
    switch (text) {
        case 'MFH':
            return 'Mehrfamilienhäusern'
        case 'Gewerbe':
            return 'Gewerbebauten'
        case 'Büro':
            return 'Bürohäusern'
        case 'EFH':
            return 'Einfamilienhäusern'
        case 'Gesundheits':
            return 'Mehrfamilienhäusern'
        case 'Sport':
            return 'Sportanlagen'
        case 'Multifunktional':
            return 'Multifunktionalbauten'
        default:
            return text;
    }
}