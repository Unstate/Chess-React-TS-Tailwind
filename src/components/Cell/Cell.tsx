import classes from './Cell.module.scss';
import { Props } from './Cell.props';


const Cell: React.FC<Props> = ({ cells,calculateMoves }) => {

    const wPawn = '/figures/wP.png';
    const wKnight = '/figures/wKn.png';
    const wBishop = '/figures/wB.png';
    const wKing = '/figures/wK.png';
    const wQueen = '/figures/wQ.png';
    const wRook = '/figures/whiteRook.png';
    const bRook = '/figures/bR.png';
    const bKnight = '/figures/bKn.png';
    const bPawn = '/figures/bP.png';
    const bBishop = '/figures/bB.png';
    const bKing = '/figures/bK.png';
    const bQueen = '/figures/bQ.png';

    return (
        <>
            {cells.map((cell,index) => 
                <div
                    key={index}
                    onClick={() => {
                        calculateMoves(cell.id,cell.figure.figureColor,cell.figure.type)
                        console.log(cell.id)
                    }}
                    className={classes.cell}
                    style={{background: cell.color}}>
                    {cell.figure.type === 'p' && cell.figure.figureColor === 'w' ? <img src={wPawn}></img> : <></>}
                    {cell.figure.type === 'b' && cell.figure.figureColor === 'w' ? <img src={wBishop}></img> : <></>}
                    {cell.figure.type === 'k' && cell.figure.figureColor === 'w' ? <img src={wKnight}></img> : <></>}
                    {cell.figure.type === 'r' && cell.figure.figureColor === 'w' ? <img src={wRook}></img> : <></>}
                    {cell.figure.type === 'king' && cell.figure.figureColor === 'w' ? <img src={wKing}></img> : <></>}
                    {cell.figure.type === 'q' && cell.figure.figureColor === 'w' ? <img src={wQueen}></img> : <></>}
                    {cell.figure.type === 'r' && cell.figure.figureColor === 'b' ? <img src={bRook}></img> : <></>}
                    {cell.figure.type === 'k' && cell.figure.figureColor === 'b' ? <img src={bKnight}></img> : <></>}
                    {cell.figure.type === 'p' && cell.figure.figureColor === 'b' ? <img src={bPawn}></img> : <></>}
                    {cell.figure.type === 'b' && cell.figure.figureColor === 'b' ? <img className='h-[100px] m-auto' src={bBishop}></img> : <></>}
                    {cell.figure.type === 'king' && cell.figure.figureColor === 'b' ? <img className='h-[90px] m-auto' src={bKing}></img> : <></>}
                    {cell.figure.type === 'q' && cell.figure.figureColor === 'b' ? <img src={bQueen}></img> : <></>}
                    {cell.isActive ? <div className={classes.isActive}></div> : <></>}
                </div>
            )}
        </>
    )
}

export default Cell