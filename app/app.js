import React from 'react';
import ReactDOM from 'react-dom';
import GameOfLifeBoard from './game-of-life/gameOfLifeBoard';
import CellFateDecider from './game-of-life/cellFateDecider';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            board: [
                [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0],
                [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0]
            ]
        }
    }
    componentDidMount(){
        setInterval(() => {
            let newBoard = this.state.board.map((row, rowIndex) => {
                return row.map((col, colIndex) => {
                    return CellFateDecider.decide(this.state.board, rowIndex, colIndex);
                });
            });
            this.setState({board: newBoard});
        }, 1500);
    }
    render() {
        return(
            <div>
            <h1>Vini, Vidi, Vici.</h1>
            <GameOfLifeBoard board={this.state.board} />
            </div>
        )
    }
};

export default App;


ReactDOM.render(<App />, document.getElementById('app'));
