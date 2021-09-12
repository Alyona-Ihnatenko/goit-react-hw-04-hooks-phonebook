import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import Button from '../Button/Button';

function ContactsList({ contactsList, handleRemove }) {
  return (
    <ul className={css.list}>
      {contactsList.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <p>
              {name}: {number}{' '}
            </p>
            <Button
              type="button"
              handleClick={e => {
                handleRemove(e.currentTarget.id);
              }}
              buttonName="Delete"
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
}
ContactsList.propTypes = {
  contactsList: PropTypes.array,
  handleRemove: PropTypes.func,
};

export default ContactsList;
