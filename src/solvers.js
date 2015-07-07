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
  /* we probably won't need this:
   create a solution object with a empty children array
  // populate solution's children array with n states w/ null children + Board({n: n}) */
  
  // set a column variable to 0;
  // var column = 0;
  // set a row variable to 0; 
  // var row = 0;
  // solution array = [];
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
    if (!board.hasConflicts()) {
      // if row === n-1 -> push board.rows() to solutions 
      if (row === n-1) {
        solutions.push(board.rows())
        // return
        /* possibly something else here! */
        var nextBoard = new Board({'n':n});
        checkIndex(nextBoard,0,1);
        return;
      } else {
        if (column < n-1){
          board.togglePiece(row,column);
          //make sure column is never >= n
          checkIndex(board,row,column+1);
          board.togglePiece(row,column);
        } 
        // increment row
        row++;
        // column = 0;
        column = 0;
        // call recursion on the whole row
        checkIndex(board, row, column);
      }
    } else {
      // if yes conflicts, untoggle row,col
      board.togglePiece(row, column);
      // increment column 
      column++;
      // call recursion on board
      checkIndex(board, row, column);
    }
  }; 
    //  var solution = undefined; //fixme
  checkIndex(newBoard,0,0);
  console.log(solutions);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
