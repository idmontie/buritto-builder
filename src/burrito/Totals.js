import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';

const getVariantFromPercent = (percent, scheme) => {
    if (scheme.nutrition === 'lower-better') {
        if (percent < 25) {
            return 'success';
        } else if (percent < 75) {
            return 'warning';
        } else {
            return 'danger';
        }
    } else {
        return 'primary';
    }
}

const Totals = ({ currentItems = {}, itemData }) => {
    const totals = {};

    Object.keys(currentItems).forEach((key) => {
        const item = currentItems[key];

        Object.keys(item).forEach((k) => {
            if (!totals[k]) {
                totals[k] = 0;
            }

            totals[k] += item[k];
        });
    });

    return (
        <div className="totals">
            <Card>
                <Card.Body>

                    <h3>Totals</h3>
                    {
                        Object.keys(totals).map((key) => {
                            const scheme = itemData.schema[key];

                            if (!scheme) {
                                return false;
                            }

                            if (!itemData.nutrition["2000"][key] && itemData.nutrition["2000"][key] !== 0) {
                                return false;
                            }

                            let percent;
                            let variant;
                            let showPercentSign;

                            if (itemData.nutrition["2000"][key] === 0) {
                                percent = Math.floor(100 * totals[key] / 1).toFixed(0);
                                variant = 'primary';
                                showPercentSign = false;
                            } else {
                                percent = Math.floor(100 * totals[key] / itemData.nutrition["2000"][key]).toFixed(0);
                                variant = getVariantFromPercent(percent, scheme);
                                showPercentSign = true;
                            }

                            return (
                                <div className="totals__entry">
                                    <div className="totals__entry__text">
                                        <div className="totals__entry__value">
                                            {totals[key]} {scheme.unit}
                                        </div>
                                        <div>
                                            {scheme.label}:
                                        </div>
                                    </div>
                                    <ProgressBar
                                        variant={variant}
                                        now={percent}
                                        label={`${percent}${showPercentSign ? '%' : ''}`}
                                    />
                                </div>
                            );
                        }).filter(Boolean)
                    }
                </Card.Body>
            </Card>
        </div>
    );
};

export default Totals;