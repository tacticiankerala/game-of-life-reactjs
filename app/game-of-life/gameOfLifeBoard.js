import React from 'react';
import Cell from './cell';

class GameOfLifeBoard extends React.Component {
    generateTable(board) {
        let cells = board.map((row, rowIndex) => {
            return(
                <tr key={rowIndex}>
                {
                    row.map((col, colIndex) => {
                        let live = col === 1 ? true : false;
                        return(
                            <td key={rowIndex * 10 + colIndex}>
                            <Cell live={live} />
                            </td>
                        )
                    })
                }
                </tr>
            )
        });

        return(
            <table>
            <tbody>{cells}</tbody>
            </table>
        )
    }
    render(){
        return this.generateTable(this.props.board)
    }
}

GameOfLifeBoard.propTypes = {
    board: React.PropTypes.arrayOf(React.PropTypes.array.isRequired).isRequired
};

export default GameOfLifeBoard;
