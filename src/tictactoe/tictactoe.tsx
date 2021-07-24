import React, { Component, useState, useEffect } from 'react';
import useStyles from './tictactoeStyles';

interface GameStage {
    [key: number]: string;
}

const Tictactoe: React.FC = () => {

    const classes = useStyles();
    const date = new Date();
    const row1 = [1, 2, 3];
    const row2 = [4, 5, 6];
    const row3 = [7, 8, 9];
    const totoalCol = 9;
    const player1_Step = 0;
    const player2_Step = 0;
    const playtype = ['0', 'x'];
    const [currentPlayPosition, setCurrentPoistion] = useState<string>('');
    const [previousPlayPosition, setPreviousPoistion] = useState<string>('');
    const [firstPlayStartPoistion, setFirstPlayPoistion] = useState<string>('');
    const [secondPlayStartPoistion, setSecondPlayPoistion] = useState<string>('');
    const [isPlayStarted, setPlayStarted] = useState<boolean>(false);
    const [gameStage, setGameStage] = useState<GameStage>({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
    });

   const reset = () => {
    setCurrentPoistion('');
    setPreviousPoistion('');
    setFirstPlayPoistion('');
    setSecondPlayPoistion('');
    setPlayStarted(false);
    setGameStage({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
    })
   }
    const playStep = (rowId: number, colId: number, value: boolean) => {
        console.log("playstep", {rowId, colId, value});
        const evenOrOdd = date.getSeconds() % 2;
        
        if (!firstPlayStartPoistion && !isPlayStarted) {
            const fp = playtype[evenOrOdd === 1? 1 : 0];
            const pp = playtype[evenOrOdd === 1? 0 : 1];
            setPlayStarted(true);
            setFirstPlayPoistion(fp);
            setSecondPlayPoistion(pp);
            setCurrentPoistion('p1');
            
            gameStage[colId] = fp;
            setGameStage({...gameStage});
        }
        
        if (currentPlayPosition && !previousPlayPosition) {
            setPreviousPoistion(currentPlayPosition);
            setCurrentPoistion('p2');
        } else if (currentPlayPosition && previousPlayPosition) {
            setPreviousPoistion(currentPlayPosition);
            setCurrentPoistion(previousPlayPosition);
        }

        gameStage[colId] = currentPlayPosition === 'p1' ? firstPlayStartPoistion : secondPlayStartPoistion;
        setGameStage({...gameStage});
        console.log("gameStage", gameStage)
    }

    useEffect(() => {
        console.log('game stage', {gameStage, currentPlayPosition, previousPlayPosition})
    }, [gameStage, currentPlayPosition, previousPlayPosition])

    return <div className={classes.mainContainer}>
        <h1 style={{textAlign: 'center', color: '#fff', margin: '0', paddingTop: '1%'}}>Tic Tac Toe</h1>
        <button onClick={reset}>Reset</button>
        <table className={classes.tabSize}>
            <tr aria-colspan={2}>
                {row1.map(n => (
                    <td key={n} onClick={(): void => playStep(1, n, true)} className={classes.rowCol1} colSpan={2}>{gameStage[n]}</td>
                ))}
            </tr>
            <tr aria-colspan={2}>
                {row2.map(n => (
                    <td key={n} onClick={(): void => playStep(1, n, true)} className={classes.rowCol2} colSpan={2}>{gameStage[n]}</td>
                ))}
            </tr>
            <tr aria-colspan={2}>
                {row3.map(n => (
                    <td key={n} onClick={(): void => playStep(1, n, true)} className={classes.rowCol3} colSpan={2}>{gameStage[n]}</td>
                ))}
            </tr>
        </table>
    </div>
}

export default Tictactoe;