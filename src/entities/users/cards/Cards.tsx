// CRITICAL: Cards => card => userCard
// best
// entities/user/ui/UserCard.tsx, user-card.module.scss, index.ts
import { FC } from "react";
import "../style/css.css";

interface CardProps {
  name: string;
  email: string;
  phone: string;
}

// компоненту создаем через export (не default)
const Cards: FC<CardProps> = ({ name, email, phone }) => {
  return (
    <div>
      <p>name : {name}</p>
      <p>email : {email}</p>
      <p>phone : {phone}</p>
    </div>
  );
};

export default Cards;
