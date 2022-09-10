function camelize(name: string) {
    return name.replace(/^\w|-./g, (x) => x.toUpperCase().replace('-', ''));
}

export const popupsMapper = (name: string) => {
    return import(`@/components/Popups/${camelize(name)}.vue`);
};
