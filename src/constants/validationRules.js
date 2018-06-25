
export const required = value => value ? undefined : 'Required';

export const minCount = minCount => items => items && items.length > minCount ? undefined : `Must be at least${minCount} items`;