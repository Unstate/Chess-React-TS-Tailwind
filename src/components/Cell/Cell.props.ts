export interface Id {
    x: number;
    y: number;
}

interface Figure {
    type: string;
    figureColor?:string;
    postMoves: number[];
    futureMoves: number[];
}

export interface Item {
    id: Id;
    color: string;
    underAttack: boolean;
    isActive: boolean;
    figure: Figure;
    
}

export interface Props {
    cells: Item[];
    calculateMoves: Function;
}