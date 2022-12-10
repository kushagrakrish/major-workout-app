import React, { useState } from "react";
import Layout from "../../shared/components/Layout";
import Board, { moveCard } from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

const board = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content",
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content",
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content",
        },
      ],
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content",
        },
      ],
    },
    {
      id: 3,
      title: "Q&A",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content",
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content",
        },
      ],
    },
    {
      id: 4,
      title: "Production",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content",
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content",
        },
      ],
    },
  ],
};

function UncontrolledBoard() {
  const [UncontrolledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(UncontrolledBoard, source, destination);
    setBoard(updatedBoard);
  }
  return (
    <>
      {/* <div className='inline-block w-full my-0 mx-auto items-center'> */}
      <Board
        onCardDragEnd={handleCardMove}
        disableColumnDrag
        allowRemoveLane
        allowRenameColumn
        allowRemoveCard
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        initialBoard={board}
        allowAddCard={{ on: "top" }}
        onNewCardConfirm={(draftCard) => ({
          id: new Date().getTime(),
          ...draftCard,
        })}
        onCardNew={console.log}
      >
        {UncontrolledBoard}
      </Board>
      {/* </div> */}
    </>
  );
}

const Kanban = ({ handleCardMove }) => {
  return (
    <>
      <Layout>
        <h4 className='text-[36px] font-bold text-blue-500 block text-center tracking-[5px]'>
          Kanban
        </h4>
        <div className='ml-[24rem] mt-11'>
          <UncontrolledBoard onCardDragEnd={handleCardMove} />
        </div>
      </Layout>
    </>
  );
};

export default Kanban;
