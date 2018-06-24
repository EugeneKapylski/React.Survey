import { shape, number, string } from 'prop-types';

export default shape({
    id: number.isRequired,
    questionType: number.isRequired,
    title: string.isRequired
});