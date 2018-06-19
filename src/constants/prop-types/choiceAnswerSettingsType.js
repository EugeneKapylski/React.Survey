import PropTypes, { shape, bool } from 'prop-types';
import answerOption from './answerOptionType';

export default shape({
    isReadonly: bool,
    options: PropTypes.arrayOf(answerOption)
});