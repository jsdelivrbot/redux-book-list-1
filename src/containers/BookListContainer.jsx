import React from 'react';
import { connect } from 'react-redux';

class BookListContainer extends React.Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        className="list-group-item"
        key={book.title}
      >
        {book.title}
      </li>
    ));
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(BookListContainer);
