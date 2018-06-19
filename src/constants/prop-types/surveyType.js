import { shape, number, string } from 'prop-types';

export default shape({
    id: number,
    title: string.isRequired
});