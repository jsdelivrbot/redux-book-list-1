import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/index';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        className="list-group-item"
        key={book.title}
        onClick={() => this.props.selectBook(book)}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
