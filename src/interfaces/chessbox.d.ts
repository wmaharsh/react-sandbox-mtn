enum ChessPiece {
rook = "Rook",
bishop= "Bishop",
queen = "Queen",
king = "King",
pawn = "Pawn",
knight = "Knight"
}

interface ChessBoxProps{
    pieceType?: ChessPiece,
    positionX: number,
    positionY: number,
}