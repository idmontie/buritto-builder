import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import NutritionCard from './NutritionCard';

const Item = ({
    onAddItem,
    onRemoveItem,
    currentItems,
    item,
    schema,
}) => {
    const [open, setOpen] = useState(false);

    const isItemInCurrentItems = Object.keys(currentItems).some(k => k === item.name);

    return (
        <div className="item">
            <Card>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <div className="item__actions">
                                    <Button
                                        variant="white"
                                        onClick={() => setOpen(!open)}
                                        aria-controls={`nutrition-info-${item.name}`}
                                        aria-expanded={open}
                                    >
                                        Nutrition Info
                                    </Button>
                                    
                                    {isItemInCurrentItems ? (
                                        <Button variant="danger" onClick={() => onRemoveItem(item)}>Remove</Button>
                                    ) : (
                                        <Button onClick={() => onAddItem(item)}>Add</Button>
                                    )}
                                </div>
                                <div>
                                    {item.name}
                                </div>
                            </Col>
                        </Row>

                        <Collapse in={open}>
                            <Row id={`nutrition-info-${item.name}`}>
                                <Col>
                                    <NutritionCard
                                        schema={schema}
                                        item={item}
                                    />
                                </Col>
                            </Row>
                        </Collapse>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;
