export default function ChessBox({pieceType, positionX, positionY}: ChessBoxProps):JSX.Element{
    return <><p>{pieceType}</p><p>{positionX}</p><p>{positionY}</p></>;
}
