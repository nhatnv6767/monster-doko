import React, {Component} from 'react';

class CardList extends Component {
    render() {
        console.log("Render")
        const {monsters} = this.props;
        return (
            <div className="card-list">
                {
                    monsters.map((monster) => {
                        return (
                            <div className="card-container" key={monster.id}>
                                <img
                                    src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                                    alt={`monster ${monster.name}`}
                                />
                                <h2>{monster.name}</h2>
                                <p>{monster.email}</p>
                            </div>
                            // <h1 key={monster.id}>{monster.name}</h1>
                        )
                    })
                }
            </div>
        );
    }
}

export default CardList;