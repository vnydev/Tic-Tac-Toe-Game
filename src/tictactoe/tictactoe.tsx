import React, { Component } from 'react';
import useStyles from './tictactoeStyles';

interface Point {
    [key: number]: string;
}

const Tictactoe: React.FC = () => {

    const classes = useStyles();
    const row1 = [1, 2, 3];
    const row2 = [4, 5, 6];
    const row3 = [7, 8, 9];
    const totoalCol = 9;
    const player1_Step = 0;
    const player2_Step = 0;
    const playtype = ['0', 'x'];
    const collectGamePoint: Point = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
    };
    const playStep = (rowId: number, colId: number, value: boolean) => {
        console.log("playstep", {rowId, colId, value});
    }

    return <div className={classes.mainContainer}>
        <h1 style={{textAlign: 'center', color: '#fff', margin: '0', paddingTop: '1%'}}>Tic Tac Toe</h1>
        <table className={classes.tabSize}>
            <tr aria-colspan={2}>
                {row1.map(n => (
                    <td key={n} onClick={(): void => playStep(1, n, true)} className={classes.rowCol1} colSpan={2}>{collectGamePoint[n]}</td>
                ))}
            </tr>
            <tr aria-colspan={2}>
                {row2.map(n => (
                    <td key={n} onClick={(): void => playStep(1, n, true)} className={classes.rowCol2} colSpan={2}>{collectGamePoint[n]}</td>
                ))}
            </tr>
            <tr aria-colspan={2}>
                {row3.map(n => (
                    <td key={n} onClick={(): void => playStep(1, n, true)} className={classes.rowCol3} colSpan={2}>{collectGamePoint[n]}</td>
                ))}
            </tr>
        </table>
    </div>
}

export default Tictactoe;