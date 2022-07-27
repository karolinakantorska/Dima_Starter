export function createMetadata(title: string) {
    console.log('title', title)
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