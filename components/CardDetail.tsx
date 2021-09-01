import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

interface CardProps {
    data: any
}

const CardDetail: React.FC<CardProps> = ({
    data
}) => {
    const item = data?.pokemon
    return (
        <Card>
            <CardContent>
                <table>
                    <tr>
                        <td><p className="color-grey">Moves</p></td>
                        <td>
                            <div className="d-flex direction-column">
                                {item?.moves?.length > 0 ?
                                    item?.moves?.map((item: any, index: number) => {
                                        return (
                                            <p key={index}>{item?.move?.name?.charAt(0)?.toUpperCase() + item?.move?.name?.substring(1)}</p>
                                        )
                                    })
                                    : <p>No move</p>
                                }
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><div className="line"></div></td>
                    </tr>
                    <tr>
                        <td><p className="color-grey">Types</p></td>
                        <td>
                            <div className="d-flex direction-column">
                                {item?.types?.length > 0 ?
                                    item?.types?.map((item: any, index: number) => {
                                        return (
                                            <p key={index}>{item?.type?.name?.charAt(0)?.toUpperCase() + item?.type?.name?.substring(1)}</p>
                                        )
                                    })
                                    : <p>No type</p>
                                }
                            </div>
                        </td>
                    </tr>
                </table>
            </CardContent>
        </Card>
    )
}

export default CardDetail
