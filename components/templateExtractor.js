export default async (template) => {
    const res = await fetch(template);
    const textTemplate = await res.text();

    const domPart = new DOMParser().parseFromString(textTemplate, 'text/html');
    const HTMLTemplate = domPart.querySelector('template');
    const styleTemplate = domPart.querySelector('style');

    return { HTMLTemplate, styleTemplate };
}