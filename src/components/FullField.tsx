import { useEffect, useState } from "react"
import Words from "./Words";
import Numbers from "./Numbers";
import Cell from "./Cell/Cell";
import { Id, Item } from "./Cell/Cell.props";

const FullField = () => {

    const [cells, setCells] = useState<Item[]>([
        {
            id: { x: 1, y: 8 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'r',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 2, y: 8 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'k',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 3, y: 8 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'b',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 4, y: 8 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'q',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 5, y: 8 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'king',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 6, y: 8 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'b',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 7, y: 8 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'k',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 8, y: 8 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'r',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 1, y: 7 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 2, y: 7 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 3, y: 7 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 4, y: 7 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 5, y: 7 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 6, y: 7 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 7, y: 7 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 8, y: 7 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'b',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 1, y: 6 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 2, y: 6 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 3, y: 6 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 4, y: 6 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 5, y: 6 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 6, y: 6 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 7, y: 6 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 8, y: 6 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 1, y: 5 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 2, y: 5 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 3, y: 5 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 4, y: 5 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 5, y: 5 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 6, y: 5 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 7, y: 5 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 8, y: 5 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 1, y: 4 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 2, y: 4 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 3, y: 4 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 4, y: 4 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 5, y: 4 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 6, y: 4 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 7, y: 4 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 8, y: 4 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 1, y: 3 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 2, y: 3 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 3, y: 3 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 4, y: 3 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 5, y: 3 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 6, y: 3 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 7, y: 3 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 8, y: 3 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: '',
                figureColor: '',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 1, y: 2 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 2, y: 2 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 3, y: 2 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 4, y: 2 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 5, y: 2 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 6, y: 2 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 7, y: 2 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 8, y: 2 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'p',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 1, y: 1 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'r',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 2, y: 1 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'k',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 3, y: 1 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'b',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 4, y: 1 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'q',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 5, y: 1 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'king',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 6, y: 1 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'b',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 7, y: 1 },
            color: 'black',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'k',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
        {
            id: { x: 8, y: 1 },
            color: 'white',
            underAttack: false,
            isActive: false,
            figure: {
                type: 'r',
                figureColor: 'w',
                postMoves: [],
                futureMoves: []
            }
        },
    ])



    useEffect(() => console.log(cells), cells)



    const calculateMoves = (id: Id, figureColor: string, type: string) => {

        const moves: any[] = [];

        // Switch on piece type to calculate moves
        switch (type) {
            case "p":
                if (figureColor === 'w') {
                    if (id.y === 2) {
                        let move: number[] = [id.x, id.y + 1]
                        moves.push(move)
                        move = [id.x, id.y + 2]
                        moves.push(move)
                    }
                    else {
                        let move = [id.x, id.y + 1]
                        moves.push(move)
                    }
                }
                else {
                    if (id.y === 7) {
                        let move: number[] = [id.x, id.y - 1]
                        moves.push(move)
                        move = [id.x, id.y - 2]
                        moves.push(move)
                    }
                    else {
                        let move = [id.x, id.y - 1]
                        moves.push(move)
                    }
                }
                setCells(cells.map(cell => (cell.id.x === id.x && cell.id.y === id.y) ? { ...cell, figure: { ...cell.figure, futureMoves: moves }, isActive: true } : {...cell, isActive: false})) 
                break;
            case "k":
                const POSSIBLE_KNIGHT_MOVES = [[-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, 1], [-2, -1]]
                POSSIBLE_KNIGHT_MOVES.map(move => moves.push([id.x + move[0], id.y + move[1]]))
                // console.log(`Id current figure >> ${id.x} ${id.y} >> moves >> ${moves}`)
                setCells(cells.map(cell => (cell.id.x === id.x && cell.id.y === id.y) ? { ...cell, figure: { ...cell.figure, futureMoves: moves }, isActive: true } : {...cell, isActive: false}))
                break;
            case "b":
                for (let i = -1; i <= 1; i += 2) {
                    for (let j = -1; j <= 1; j += 2) {
                        let x: number = id.x + i;
                        let y: number = id.y + j;
                        while (x > 0 && x <= 8 && y > 0 && y <= 8) {
                            moves.push([x, y]);
                            x += i;
                            y += j;
                        }
                    }
                }
                setCells(cells.map(cell => (cell.id.x === id.x && cell.id.y === id.y) ? { ...cell, figure: { ...cell.figure, futureMoves: moves }, isActive: true } : {...cell, isActive: false}))
                break;
            case "r":
                if (id.x) {
                    for (let i = id.x + 1; i <= 8; i++) {
                        moves.push([i, id.y])
                    }
                    for (let i = id.x - 1; i > 0; i--) {
                        moves.push([i, id.y])
                    }
                }
                if (id.y) {
                    for (let i = id.y + 1; i <= 8; i++) {
                        moves.push([id.x, i])
                    }
                    for (let i = id.y - 1; i > 0; i--) {
                        moves.push([id.x, i])
                    }
                }
                setCells(cells.map(cell => (cell.id.x === id.x && cell.id.y === id.y) ? { ...cell, figure: { ...cell.figure, futureMoves: moves }, isActive: true } : {...cell, isActive: false}))
                break;
            case "q":
                //queen
                break;
            case "king":
                const POSSIBLE_KING_MOVES = [[0, 1], [0, -1], [1, 1], [1, 0], [1, -1], [-1, 0], [-1, 1], [-1, -1]]
                POSSIBLE_KING_MOVES.map(move => moves.push([id.x + move[0], id.y + move[1]]))
                const newMoves = moves.filter((move) => (move[0] !== 0 || move[0] !== 9) && (move[1] !== 0 && move[1] !== 9))
                setCells(cells.map(cell => (cell.id.x === id.x && cell.id.y === id.y) ? { ...cell, figure: { ...cell.figure, futureMoves: newMoves }, isActive: true } : {...cell, isActive: false}))
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="grid grid-rows-3 grid-cols-10">

                {/* words */}
                <div className="col-span-10 bg-red-500 flex flex-row justify-center items-end">
                    <Words></Words>
                </div>
                {/* words */}

                {/* numbers */}
                <div className="bg-blue-500  flex flex-col">
                    <Numbers></Numbers>
                </div>
                {/* numbers */}

                {/* field */}
                <div className="bg-green-500 w-[800px] m-auto col-span-8 flex flex-wrap">
                    <Cell
                        cells={cells}
                        calculateMoves={calculateMoves}
                    ></Cell>
                </div>
                {/* field */}

                {/* numbers */}
                <div className="bg-orange-500 ">
                    <Numbers></Numbers>
                </div>
                {/* numbers */}

                {/* words */}
                <div className=" col-span-10 bg-red-500  flex flex-row justify-center">
                    <Words></Words>
                </div>

                {/* words */}

            </div>
        </>
    )
}

export default FullField