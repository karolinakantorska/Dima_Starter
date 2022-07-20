export function createMetadata(title: string) {
    return {
        contentType: 'image/jpeg',
        customMetadata: {
            'title': `${title}`,
            'alt': `${title}`,
        }
    }
}
export function fileNameWithoutFileExtension(text: string) {
    return text.replace(/\.[^.]*$/, ' ').replace(/^\w/, c => c.toUpperCase());
}