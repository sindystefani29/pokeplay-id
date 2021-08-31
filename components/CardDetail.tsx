import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

const CardDetail = () => {
    return (
        <Card>
            <CardContent>
                <div className="d-flex direction-column">
                    <div className="d-flex justify-between">
                        <p className="color-grey">Name</p>
                        <div className="d-flex direction-column">
                            <p>Agent</p>
                        </div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="d-flex direction-column">
                    <div className="d-flex justify-between">
                        <p className="color-grey">Name</p>
                        <div className="d-flex direction-column">
                            <p>Agent</p>
                            <p>Agent</p>
                            <p>Agent</p>
                            <p>Agent</p>
                        </div>
                    </div>
                    <div className="line"></div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardDetail
