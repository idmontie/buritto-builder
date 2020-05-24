import React from 'react';
import Table from 'react-bootstrap/Table';

const NutritionCard = ({ schema, item }) => {
    return (
        <Table striped bordered hover>
            <tbody>
                {
                    Object.keys(item).map((key) => {
                        const scheme = schema[key];
                        const value = item[key];

                        if (!scheme) {
                            return false;
                        }

                        return (
                            <tr key={key}>
                                <td>{scheme.label} ({scheme.unit})</td>
                                <td>{value}</td>
                            </tr>
                        );
                    }).filter(Boolean)
                }
            </tbody>
        </Table>
    );
}

export default NutritionCard;