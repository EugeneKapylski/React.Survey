import { shape, bool, string } from 'prop-types';

export default shape({
    isReadonly: bool,
    answer: string
});