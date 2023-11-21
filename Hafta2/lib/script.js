document.addEventListener('DOMContentLoaded', function () {
  var selectedDifficulty = 'kolay';
  startGame(selectedDifficulty);
  timer();
  var newGameButton = document.querySelector('.new');
  if (newGameButton) {
    newGameButton.addEventListener('click', function () {
      var activeElement = document.querySelector('.ust1 a.active');
      var activeDifficulty = activeElement.textContent.trim().toLowerCase();
      selectedDifficulty = activeDifficulty;
      newGameZorlukSecim(selectedDifficulty);
    });
  }

  cell_hover();

  var numberButtons = document.querySelectorAll('.num');
  var numberButtonArray = Array.from(numberButtons);
  numberButtonArray.forEach(function (number) {
    number.addEventListener('mousedown', function () {
      var numberActive = number.textContent.trim();
      if (selectedCell) {
        selectedCell.textContent = numberActive;
        var isConflict = checkForConflict(selectedCell);
        if (isConflict) {
          errorCount++;
          document.getElementById('errorCount').textContent = errorCount;
          selectedCell.style.color = 'red';
        } else {
          selectedCell.style.backgroundColor = 'lightgray';
        }
      }
    });
  });
});

var errorCount = 0;
var sudokuCellsArray;
var selectedCell;

function cell_hover() {
  var sudokuCells = document.querySelectorAll('.sudoku-cell');
  sudokuCellsArray = Array.from(sudokuCells);
  sudokuCellsArray.forEach(function (cell) {
    cell.addEventListener('mousedown', function () {
      if (selectedCell !== cell) {
        if (selectedCell) {
          resetCell(selectedCell, sudokuCellsArray);
        }

        selectedCell = cell;
        highlightCells(selectedCell);
      }
    });
  });
}

function highlightCells(cell) {
  var rowIndex = parseInt(cell.getAttribute('data-satir'));
  var colIndex = parseInt(cell.getAttribute('data-sutun'));

  sudokuCellsArray.forEach(function (rowCell) {
    var currentRowIndex = parseInt(rowCell.getAttribute('data-satir'));
    if (currentRowIndex === rowIndex && rowCell !== cell) {
      rowCell.style.backgroundColor = 'lightblue';
    }
  });

  sudokuCellsArray.forEach(function (columnCell) {
    var currentColIndex = parseInt(columnCell.getAttribute('data-sutun'));
    if (currentColIndex === colIndex && columnCell !== cell) {
      columnCell.style.backgroundColor = 'lightblue';
    }
  });

  var block = cell.closest('.sudoku-block');
  block.style.backgroundColor = 'lightblue';

  cell.style.backgroundColor = 'lightgray';
}

function resetCell(cell, cellsArray) {
  cell.style.backgroundColor = '';
  var block = cell.closest('.sudoku-block');
  if (block) {
    block.style.backgroundColor = '';
  }

  var rowIndex = parseInt(cell.getAttribute('data-satir'));
  cellsArray.forEach(function (rowCell) {
    var currentRowIndex = parseInt(rowCell.getAttribute('data-satir'));
    if (currentRowIndex === rowIndex && rowCell !== cell) {
      rowCell.style.backgroundColor = '';
    }
  });

  var colIndex = parseInt(cell.getAttribute('data-sutun'));
  cellsArray.forEach(function (columnCell) {
    var currentColIndex = parseInt(columnCell.getAttribute('data-sutun'));
    if (currentColIndex === colIndex && columnCell !== cell) {
      columnCell.style.backgroundColor = '';
    }
  });
}

function checkForConflict(cell) {
  var selectedNumber = cell.textContent.trim();
  var cellsInSameRow = getCellsInSameRow(cell);
  var cellsInSameColumn = getCellsInSameColumn(cell);
  var cellsInSameBox = getCellsInSameBox(cell);

  var allCells = cellsInSameRow.concat(cellsInSameColumn, cellsInSameBox);

  for (var i = 0; i < allCells.length; i++) {
    if (allCells[i] !== cell && allCells[i].textContent.trim() === selectedNumber) {
      return true;
    }
  }

  return false;
}

function getCellsInSameRow(cell) {
  var rowCells = Array.from(cell.parentElement.children);
  return rowCells.filter(function (rowCell) {
    return rowCell !== cell;
  });
}

function getCellsInSameColumn(cell) {
  var columnCells = [];
  var columnIndex = Array.from(cell.parentElement.children).indexOf(cell);
  var allRows = Array.from(cell.parentElement.parentElement.children);

  allRows.forEach(function (row) {
    columnCells.push(row.children[columnIndex]);
  });

  return columnCells.filter(function (columnCell) {
    return columnCell !== cell;
  });
}

function getCellsInSameBox(cell) {
  var boxCells = [];
  var rowIndex = Array.from(cell.parentElement.parentElement.children).indexOf(cell.parentElement);
  var columnIndex = Array.from(cell.parentElement.children).indexOf(cell);
  var allRows = Array.from(cell.parentElement.parentElement.children);

  for (var i = 0; i < 3; i++) {
    var currentRow = allRows[rowIndex - (rowIndex % 3) + i];
    for (var j = 0; j < 3; j++) {
      boxCells.push(currentRow.children[columnIndex - (columnIndex % 3) + j]);
    }
  }

  return boxCells.filter(function (boxCell) {
    return boxCell !== cell;
  });
}

function startGame(difficulty) {
  var sudokuBoard = generateSudokuBoard(difficulty);
  displaySudokuBoard(sudokuBoard);
}

function generateSudokuBoard(level) {
  var blockDensity = 0; 

  if (level === 'kolay') {
    blockDensity = 45; 
  } else if (level === 'orta') {
    blockDensity = 35; 
  } else if (level === 'zor') {
    blockDensity = 25; 
  }

  var sudokuBoard = createEmptyBoard();
  fillBoard(sudokuBoard, blockDensity);

  return sudokuBoard;
}

function createEmptyBoard() {
  return Array.from({ length: 9 }, () => Array(9).fill(0));
}

function fillBoard(board, blockDensity) {
  for (var blockRow = 0; blockRow < 3; blockRow++) {
    for (var blockCol = 0; blockCol < 3; blockCol++) {
      fillBlock(board, blockRow * 3, blockCol * 3, blockDensity);
    }
  }
}

function fillBlock(board, startRow, startCol, density) {
  var cellsToFill = Math.floor((9 * density) / 100); 
  for (var i = 0; i < cellsToFill; i++) {
    var row = startRow + Math.floor(Math.random() * 3);
    var col = startCol + Math.floor(Math.random() * 3);
    var value = Math.floor(Math.random() * 9) + 1;

    if (isValidMove(board, row, col, value)) {
      board[row][col] = value;
    } else {
      i--;
    }
  }
}

function displaySudokuBoard(board) {
  var sudokuCells = document.querySelectorAll('.sudoku-cell');
  sudokuCells.forEach(function (cell, index) {
    var row = Math.floor(index / 9);
    var col = index % 9;
    cell.textContent = board[row][col] !== 0 ? board[row][col] : '';
  });
  timer();
}

function fillCells(board, numberOfCellsToFill) {
  for (var i = 0; i < numberOfCellsToFill; i++) {
    var row = Math.floor(Math.random() * 9);
    var col = Math.floor(Math.random() * 9);
    var value = Math.floor(Math.random() * 9) + 1;

    if (isValidMove(board, row, col, value)) {
      board[row][col] = value;
    } else {
      i--;
    }
  }

  displaySudokuBoard(board);
}

function isValidMove(board, row, col, value) {
  return (
    isRowValid(board, row, value) &&
    isColumnValid(board, col, value) &&
    isBlockValid(board, row, col, value)
  );
}

function isRowValid(board, row, value) {
  return !board[row].includes(value);
}

function isColumnValid(board, col, value) {
  for (var i = 0; i < 9; i++) {
    if (board[i][col] === value) {
      return false;
    }
  }
  return true;
}

function isBlockValid(board, row, col, value) {
  var startRow = Math.floor(row / 3) * 3;
  var startCol = Math.floor(col / 3) * 3;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === value) {
        return false;
      }
    }
  }
  return true;
}

function checkSudoku() {
  // Sudoku kurallarını kontrol et
  // Bu fonksiyon, satır, sütun ve bloklardaki tekrarlanan sayıları kontrol etmelidir
  // Eğer oyun tamamlandıysa, bir bitiş ekranı gösterilebilir
  // Eğer oyun tamamlanmadıysa, kullanıcıya hataları düzeltmesi için bir mesaj gösterilebilir
}

function newGame(difficulty) {
  console.log('Starting a new game with difficulty:', difficulty);
}

function newGameZorlukSecim(difficulty) {
  console.log('newGameZorlukSecim:', difficulty);
  resetCell(selectedCell, sudokuCellsArray);
  errorCount = 0;
  document.getElementById('errorCount').textContent = errorCount;
  startGame(difficulty);
}

function selectDifficulty(difficulty) {
  selectedDifficulty = difficulty;

  var difficultyButtons = document.querySelectorAll('.ust1 a');
  difficultyButtons.forEach(function (button) {
    button.classList.remove('active');
  });

  var selectedButton = document.querySelector('.' + difficulty);
  selectedButton.classList.add('active');
  newGameZorlukSecim(difficulty); 
}

function point() {}

var startTime; 

function timer() {
  startTime = new Date(); 

  setInterval(function () {
    var currentTime = new Date();
    var elapsedTime = Math.floor((currentTime - startTime) / 1000); 

    var minutes = Math.floor(elapsedTime / 60);
    var seconds = elapsedTime % 60;

    var timerElement = document.getElementById('timer');
    timerElement.textContent = padZero(minutes) + ':' + padZero(seconds);
  }, 1000);
}

function padZero(number) {
  return (number < 10 ? '0' : '') + number;
}

function showHint() {
  // Kullanıcıya bir ipucu göster
  // İpucu, doğru sayıları içermeyen bir hücreyi vurgulayabilir
}