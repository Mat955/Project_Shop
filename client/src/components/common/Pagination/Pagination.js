import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Pagination.scss';

class Pagination extends React.Component {

  state = {
    presentPage: this.props.initialPage || 1
  }

  changePage = (newPage) => {
    const { onPageChange } = this.props;
    this.setState({ presentPage: newPage });
    onPageChange(newPage);
  }

  skipToPage = increase => {
    const { changePage } = this;
    const { presentPage } = this.state;
    const targetPage = presentPage + increase;
    changePage(targetPage);
  }

  render() {
    // eslint-disable-next-line
    const { pages, onPageChange } = this.props;
    const { presentPage } = this.state;
    const { changePage, skipToPage } = this;

    return (
      <div className="pagination">
        <ul className="pagination_list">
          {presentPage >= 2 && (
            <li className='pagination_list_item'>
              <FontAwesomeIcon
                icon={faAngleLeft}
                onClick={() => {
                  skipToPage(-1);
                }}
              />
            </li>
          )}
          {[...Array(pages)].map((el, page) =>
            <li
              key={++page}
              onClick={() => { changePage(page) }}
              className={`pagination_list_item${((page) === presentPage) ? ' pagination_list_item--active' : ''}`}>
              {page}
            </li>
          )}
          {presentPage !== pages && (
            <li className="pagination_list_item">
              <FontAwesomeIcon
                icon={faAngleRight}
                onClick={() => {
                  skipToPage(1);
                }}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
};

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;