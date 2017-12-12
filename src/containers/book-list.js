import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  constructor(props){
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}</li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

//이 함수로 반환받은 것이 북리스트 컨테이너의 props로 연결된다.
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result shoud be passed
  // to all of our reducers
  // selectBook이 호출될 때마다, 결과는 리듀서로 전달되어져야 한다.

  //this.props.selectBook을 호출하면 액션 생성자를 호출하는 것이다.
  // bindActionCreators와 dispatch 는 selectBook 반환값이 리듀서로 흘러 가도록 하는데 목적이 있다.
  return bindActionCreators({ selectBook : selectBook }, dispatch);
}

// 컴포넌트에서 컨테이너로 북 리스트를 바꿔야 하는데
// 이는 새로운 dispatch 메소드인 selectBook을 알아야 하구요.
// 이는 props로 이용이 가능합니다.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
