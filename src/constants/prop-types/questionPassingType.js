import { shape, bool, string } from 'prop-types';

export default shape({
    answer: shape({
        answerSettings: string.isRequired
    }),
    user: bool.isRequired
});