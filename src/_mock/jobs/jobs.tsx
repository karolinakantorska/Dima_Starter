import { Job } from "src/utils/TS/interface";

export const jobs: Job[] = [
    {
        announcment: new Date('December 17, 2021'),
        location: 'Zurich',
        title: 'Berufsbildner_in ZFA Fachr. Architektur EFZ. Bauleiter',
        procentMin: '20',
        procent: '60',
        descriptionJob: ['Wir suchen Bauleiter und Berufsbildner.'],
        descWe: ['Bei uns fordern wir Sie mit spannenden Aufgaben und fördern Sie mit Weiterbildungsangeboten und der chance, sich intern weiterzuentwickeln.', 'Wir bieten Ihnen zeitgemässe Anstellungsbedingungen in Form von Mobile Working und Home Office sowie ein von Teamgeist geprägtes Umfeld.'],
        tasks: ['Plannung von Verlauf von Bauarbeiten',
            'Kostenschatzung und Bauablaufplannung',
            'Betreung von Lerhingen Fachrichtung Bauzeichner'],
        skills: ['BIM Kentnisse - All-Plann/ Revit',],
        kontaktperson: 'Karolina Kantorska',
        phone: '+41 58 474 34 03',
        email: 'info@dima-partner.ch',
        id: '1'
    },
    {
        announcment: new Date('May 20, 2022'),
        location: 'Glarus',
        title: 'Bauleiter',
        procentMin: 'keins',
        procent: '100',
        descriptionJob: ['Erfahrene Bauleiter für Baustellen in Region Arosa'],
        descWe: ['Bei uns fordern wir Sie mit spannenden Aufgaben und fördern Sie mit Weiterbildungsangeboten und der chance, sich intern weiterzuentwickeln.', 'Wir bieten Ihnen zeitgemässe Anstellungsbedingungen in Form von Mobile Working und Home Office sowie ein von Teamgeist geprägtes Umfeld.'],
        tasks: ['verantworktung von Verlauf des Bauarbeiten',
            'Kostenschatzung und Bauablaufplannung',
            'Kontrole von Baumangeln und Arbeitsqualitet',
        ],
        skills: ['Erfahrung in Bauleitung in Alpinregionen', 'BIM Kentnisse - All-Plann/ Revit', 'Gute psychologische überzeugungskraft ',],
        kontaktperson: 'Karolina Kantorska',
        phone: '+41 58 474 34 03',
        email: 'info@dima-partner.ch',
        id: '2'
    },
    {
        announcment: new Date('May 15, 2022'),
        location: 'Zurich',
        title: 'Architekt',
        procentMin: '80',
        procent: '100',
        descriptionJob: ['Designarchitekt mit Erfahrung in Grunstuckanalizen.', ' Elegantes, zeitloses design ist deine Merkmal? ', 'Hast du ausdauerhaft um die Komplexen baueingaben bis Bewiligung zu begleiten? ', 'Bist du bei uns in richtigen Ort.'],
        descWe: ['Bei uns fordern wir Sie mit spannenden Aufgaben und fördern Sie mit Weiterbildungsangeboten und der chance, sich intern weiterzuentwickeln.', 'Wir bieten Ihnen zeitgemässe Anstellungsbedingungen in Form von Mobile Working und Home Office sowie ein von Teamgeist geprägtes Umfeld.'],
        tasks: ['erstelung von Konzepten', 'Grundstuckanalisen', 'vorbereitung von Baubewiligungs Plannen', 'beschafung von Baubewilligungs notwendigen Dokumenten'],
        skills: ['erfarung mit Revit oder andere BIM Programmen', 'Kentniss von Baubewilligungsverfahren', 'gute organisatorische Fahigheiten', ' geschicktes umgang mit Bauherren und Behörden'],
        kontaktperson: 'Karolina Kantorska',
        phone: '+41 58 474 34 03',
        email: 'info@dima-partner.ch',
        id: '3'
    }
]