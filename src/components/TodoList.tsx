import React from "react";
import { Button, Card } from "antd";
import { ITodo } from "../interfaces/ITodo";

export interface ITodoList {
  todoList: ITodo[];
  removeCb: (id: string) => void;
}

export const TodoList: React.FC<ITodoList> = ({ todoList, removeCb }) => {
  return (
    <div style={{ padding: "5px", margin: "5px" }}>
      {todoList?.map((item) => {
        return (
          <Card
            style={{
              margin: "5px",
            }}
          >
            <div>{item.name}</div>
            <Button danger onClick={() => removeCb(item.id)}>
              DELETE
            </Button>
          </Card>
        );
      })}
    </div>
  );
};
