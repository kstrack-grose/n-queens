/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solutions = []; //fixme
  // create new board;
  var newBoard = new Board({'n': n});
  // for all children in solution, call recursive function

  // RECURSION 
  var checkIndex = function(board, row, column) {
    // toggle the row, at column
    board.togglePiece(row, column);
    // check for conflicts
    // if no conflicts,
    if (!board.hasStraightConflicts()) {
      // if row === n-1 -> push board.rows() to solutions 
      if (row === n-1) {
        solutions.push(board.deepCopy());

        // untoggle last piece of solution
        board.togglePiece(row, column); 
        return;
      } else {
        if (column < n-1){
          // this will untoggle this first time
          board.togglePiece(row,column);
          //make sure column is never >= n
          checkIndex(board,row,column+1);
          // this is a retoggle
          board.togglePiece(row,column);
        } 
        // increment row
        // row++;
        // column = 0;
        // column = 0;
        // call recursion on the whole row
        checkIndex(board, row+1, 0);
        // we are untoggling the added piece
        board.togglePiece(row,column);
      }
    } else {
      // if yes conflicts, untoggle row,col
      board.togglePiece(row, column);
      // increment column 
      if (column === n-1){
        return;
      }
      column++;
      // call recursion on board
      checkIndex(board, row, column);
    }
  }; 
    //  var solution = undefined; //fixme
  checkIndex(newBoard,0,0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions[0]));
  return solutions[0];
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  // create new board;
  var newBoard = new Board({'n': n});
  // for all children in solution, call recursive function
  // RECURSION 
  var checkIndex = function(board, row, column) {
    // toggle the row, at column
    board.togglePiece(row, column);
    // check for conflicts
    // if no conflicts,
    if (!board.hasStraightConflicts()) {
      // if row === n-1 -> push board.rows() to solutions 
      if (row === n-1) {
        solutionCount ++;
        // untoggle last piece of solution
        board.togglePiece(row, column); 
        return;
      } else {
        if (column < n-1){
          // this will untoggle this first time
          board.togglePiece(row,column);
          //make sure column is never >= n
          checkIndex(board,row,column+1);
          // this is a retoggle
          board.togglePiece(row,column);
        } 
        // increment row
        // row++;
        // column = 0;
        // column = 0;
        // call recursion on the whole row
        checkIndex(board, row+1, 0);
        // we are untoggling the added piece
        board.togglePiece(row,column);
      }
    } else {
      // if yes conflicts, untoggle row,col
      board.togglePiece(row, column);
      // increment column 
      if (column === n-1){
        return;
      }
      column++;
      // call recursion on board
      checkIndex(board, row, column);
    }
  }; 
    //  var solution = undefined; //fixme
  checkIndex(newBoard,0,0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
    // will not operate on a board of 0 size (or a negative size board, which is totally stupid)
  if (n <= 0){
    return 0;
  }
  var solutions = [];
  // create new board;
  var newBoard = new Board({'n': n});
  // for all children in solution, call recursive function
  // RECURSION 
  var checkIndex = function(board, row, column) {
    // toggle the row, at column
    board.togglePiece(row, column);
    // check for conflicts
    // if no conflicts,
    if (!(board.hasStraightConflicts() || board.hasDiagonalConflicts())) {
      // if row === n-1 -> push board.rows() to solutions 
      if (row === n-1) {
        solutions.push(board.deepCopy());
        // untoggle last piece of solution
        board.togglePiece(row, column); 
        return;
      } else {
        if (column < n-1){
          // this will untoggle this first time
          board.togglePiece(row,column);
          //make sure column is never >= n
          checkIndex(board,row,column+1);
          // this is a retoggle
          board.togglePiece(row,column);
        } 
        // increment row
        // row++;
        // column = 0;
        // column = 0;
        // call recursion on the whole row
        checkIndex(board, row+1, 0);
        // we are untoggling the added piece
        board.togglePiece(row,column);
      }
    } else {
      // if yes conflicts, untoggle row,col
      board.togglePiece(row, column);
      // increment column 
      if (column === n-1){
        return;
      }
      column++;
      // call recursion on board
      checkIndex(board, row, column);
    }
  }; 
    //  var solution = undefined; //fixme
  checkIndex(newBoard,0,0);
  if (solutions[0]===undefined){
    solutions[0] = newBoard.rows();
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions[0]));
  return solutions[0];
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // will not operate on a board of 0 size (or a negative size board, which is totally stupid)
  if (n <= 0){
    return 1;
  }
  var solutionCount = 0; //fixme
  // create new board;
  var newBoard = new Board({'n': n});
  // for all children in solution, call recursive function
  // RECURSION 
  var checkIndex = function(board, row, column) {
    // toggle the row, at column
    board.togglePiece(row, column);
    // check for conflicts
    // if no conflicts,
    if (!(board.hasStraightConflicts() || board.hasDiagonalConflicts())) {
      // if row === n-1 -> push board.rows() to solutions 
      if (row === n-1) {
        solutionCount ++;
        // untoggle last piece of solution
        board.togglePiece(row, column); 
        return;
      } else {
        if (column < n-1){
          // this will untoggle this first time
          board.togglePiece(row,column);
          //make sure column is never >= n
          checkIndex(board,row,column+1);
          // this is a retoggle
          board.togglePiece(row,column);
        } 
        // increment row
        // row++;
        // column = 0;
        // column = 0;
        // call recursion on the whole row
        checkIndex(board, row+1, 0);
        // we are untoggling the added piece
        board.togglePiece(row,column);
      }
    } else {
      // if yes conflicts, untoggle row,col
      board.togglePiece(row, column);
      // increment column 
      if (column === n-1){
        return;
      }
      column++;
      // call recursion on board
      checkIndex(board, row, column);
    }
  }; 
    //  var solution = undefined; //fixme
  checkIndex(newBoard,0,0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
