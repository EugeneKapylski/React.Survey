import { shape, number, string } from 'prop-types';

export default shape({
    id: number.isRequired,
    firstName: string.isRequired,
    lastNameName: string.isRequired
});