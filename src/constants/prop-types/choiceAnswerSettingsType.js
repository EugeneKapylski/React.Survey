import { arrayOf, shape, bool } from 'prop-types';
import answerOption from './answerOptionType';

export default shape({
    isReadonly: bool,
    options: arrayOf(answerOption)
});