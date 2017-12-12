import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
// 리덕스는 어플리케이션 스테이트를 관리한다.
// 어플리케이션 스테이트와 컴포넌트 스테이트는 완전히 별개의 이야기다.
// 어플리케이션 스테이트는 리듀서에 의해 만들어 진다.

// 어플리케이션 스테이트

// 컴포넌트 스테이트
// this.state.asdf = 'tttt';
// this.setstate = { asdf = 'asdf' };

//여기서 리듀서가 전역으로 사용가능하도록 등록이 된다.
// 아래가 어플리케이션 스테이트
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
