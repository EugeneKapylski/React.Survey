import { shape, bool, string } from 'prop-types';

export default shape({
    value: string.isRequired,
    isSelected: bool.isRequired
});