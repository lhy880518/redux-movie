import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    //이렇게 처리도 가능하고 reducer_active_book에서 초기화로도 가능
    if(!this.props.book){
      return (
        <div>Select a book to get started.</div>
      );
    }
    return (
      <div>
        <h3>Details for : </h3>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
