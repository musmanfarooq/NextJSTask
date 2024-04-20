import React from "react";

interface CardProps {
  title: string;
  number: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="block min-w-[250px] p-6 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 shadow rounded-md text-white">
      <div className="flex content-center justify-between">
        <div>{props.title}</div>
        <div className="text-xl">{props.number}</div>
      </div>
    </div>
  );
};

export default Card;
