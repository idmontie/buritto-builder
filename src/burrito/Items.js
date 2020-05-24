import React from 'react';
import Item from './Item';

const Items = ({ onAddItem, onRemoveItem, currentItems, itemData }) => {
    return (
        <div className="items">
            {itemData.items.map((item, i) => {
                return (
                    <div key={i} className="items__item">
                        <Item
                            onAddItem={onAddItem}
                            onRemoveItem={onRemoveItem}
                            currentItems={currentItems}
                            item={item}
                            schema={itemData.schema}
                        />
                    </div>
                )
            })}
        </div>
    )
};

export default Items;