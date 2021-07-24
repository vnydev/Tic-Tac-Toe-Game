import { makeStyles, Theme, createStyles } from '@material-ui/core';


const useClasses = makeStyles((themes: Theme) => createStyles({
    mainContainer: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
    },
    tabSize: {
        width: '150px',
        height: '150px',
        left: '45%',
        border: '1px solid #ccc',
        top: '40%',
        'z-index': '1000',
        position: 'absolute',
    },
    rowCol1: {
        border: '1px solid #ccc',
        cursor: 'pointer',
    },
    rowCol2: {
        border: '1px solid #ccc',
        cursor: 'pointer',
    },
    rowCol3: {
        border: '1px solid #ccc',
        cursor: 'pointer',
    }
}));

export default useClasses;