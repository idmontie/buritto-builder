import React, { useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Menu.css';

import Items from './Items';
import Totals from './Totals';

import data from './data.json';

const ACTIONS = {
    addItem: Symbol(),
    removeItem: Symbol(),
};

const reducer = (state, action) => {
    switch (action.type) {
    case ACTIONS.addItem:
        return {
            ...state,
            [action.data.name]: action.data,
        };
    case ACTIONS.removeItem:
        const clone = {...state};
        delete clone[action.data.name];

        return clone;
    default: 
        return state;
    }
};

const Menu = () => {
    const [state, dispatch] = useReducer(reducer, {});

    const addItem = (item) => {
        dispatch({
            data: item,
            type: ACTIONS.addItem,
        });
    };

    const removeItem = (item) => {
        dispatch({
            data: item,
            type: ACTIONS.removeItem,
        });
    };

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <div className="menu">
                        <div className="menu__frame">
                            <Items
                                itemData={data}
                                currentItems={state}
                                onAddItem={addItem}
                                onRemoveItem={removeItem}
                            />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="menu__frame menu__frame--totals">
                        <Totals currentItems={state} itemData={data} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Menu;