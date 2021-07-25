import { useState, useRef } from 'react';
import React from 'react';

import { FaTrash } from 'react-icons/fa';

const DragAndDrop = ({ data }) => {
  const [list, setList] = useState(data);
  const [text, setText] = useState('');
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[params.colI].items.splice(
          params.itemI,
          0,
          newList[currentItem.colI].items.splice(currentItem.itemI, 1)[0]
        );
        dragItem.current = params;

        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.colI === params.colI &&
      currentItem.itemI === params.itemI
    ) {
      return 'current item';
    }
    return 'item';
  };

  const addItem = () => {
    if (!text) {
      return;
    }

    setList((prev) => {
      const [todoData, ...rest] = prev;
      console.log('rest', ...rest);
      console.log('todoData', todoData);
      return [{ ...todoData, items: [text, ...todoData.items] }, ...rest];
    });

    setText('');
  };

  return (
    <>
      <div className="page-hero">
        <h1>TASK APP</h1>
        <div className="add-item">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn" onClick={addItem}>
            ADD TASK
          </button>
        </div>
      </div>
      <div className="content">
        <div className="column">
          {list.map((col, colI) => {
            const { title, items } = col;
            return (
              <div
                key={colI}
                className="card"
                onDragEnter={
                  dragging && !items.length
                    ? (e) => handleDragEnter(e, { colI, itemI: 0 })
                    : null
                }
              >
                <h3>{title}</h3>
                {items.map((item, itemI) => {
                  return (
                    <div
                      draggable
                      onDragStart={(e) => handleDragStart(e, { colI, itemI })}
                      onDragEnter={
                        dragging
                          ? (e) => handleDragEnter(e, { colI, itemI })
                          : null
                      }
                      key={itemI}
                      className={dragging ? getStyles({ colI, itemI }) : 'item'}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DragAndDrop;
