class CellFateDecider {
    getCell(board, row, col) {
        let isInsideVisibleBoard = (row >= 0 && col >= 0 &&
                                    row < board.length && col < board[row].length);
        if(isInsideVisibleBoard) {
            return board[row][col];
        }
        return 0;
    }
    getNeighbourhood(board, row, col) {
        return [
            [this.getCell(board, row - 1, col - 1),
             this.getCell(board, row - 1, col),
             this.getCell(board, row - 1, col + 1)],

            [this.getCell(board, row, col - 1),
             this.getCell(board, row, col),
             this.getCell(board, row, col + 1)],

            [this.getCell(board, row + 1, col - 1),
             this.getCell(board, row + 1, col),
             this.getCell(board, row + 1, col + 1)]
        ]
    }
    getTotalLiveCellsIntheNeighbourhood(board, row, col) {
        let count = this.getNeighbourhood(board, row, col).reduce((sum, cells) => {
            cells.forEach((cell, index) => {
                sum = sum + cell;
            });
            return sum;
        }, 0);
        return count - this.getCell(board, row, col);
    }
    willSurvive(board, row, col) {
        let neighbourCount = this.getTotalLiveCellsIntheNeighbourhood(board, row, col);
        if(neighbourCount === 2 || neighbourCount === 3){
            return true;
        }else{
            return false;
        }
    }
    willResurrect(board, row, col){
        let neighbourCount = this.getTotalLiveCellsIntheNeighbourhood(board, row, col);
        if(neighbourCount === 3){
            return true;
        }else{
            return false;
        }
    }
    willLive(board, row, col){
        if(this.getCell(board, row, col) === 1) {
            return this.willSurvive(board, row, col);
        }else {
            return this.willResurrect(board, row, col);
        }
    }
    decide(board, row, col) {
        if(this.willLive(board, row, col)) {
            return 1;
        }
        return 0
    }
}

export default new CellFateDecider();
