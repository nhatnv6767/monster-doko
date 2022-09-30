import "./card-list.styles.css"
import Card from "../card/card.component";
import {Monster} from "../../App";

type CardListProps = {
    monsters: Monster[],
}

const CardList = ({monsters}: CardListProps) => {
    return (
        <div className="card-list">
            {
                monsters.map((monster) => {
                    return (
                        <Card monster={monster} key={monster.id}/>
                    )
                })
            }
        </div>
    );
}

export default CardList;