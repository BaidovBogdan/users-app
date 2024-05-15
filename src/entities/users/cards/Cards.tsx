import "../style/css.css";

interface CardProps {
    name: string;
    email: string;
    phone: string;
}

const Cards: React.FC<CardProps> = ({ name, email, phone }) => {
    return (
        <div>
            <p>name : {name}</p>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
        </div>
    );
};

export default Cards;
