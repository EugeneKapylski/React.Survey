import { arrayOf, shape, bool } from 'prop-types';
import answerOptionPropType from './answerOptionPropType';

export default shape({
    isReadonly: bool,
    options: arrayOf(answerOptionPropType)
});