import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Row, Col, Progress, Card, CardBody, CardText, Badge, Button, Input } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import URLS from '../constants/urls'
import {push} from "react-router-redux";


class Trader extends Component{
    render() {

        const {push} = this.props;

        return (
            <BasePage
                active={[false, false, false]}
                traders_active={true}
            >
                <div className='it-trader'>
                    <div className='d-flex justify-content-between mt-3'>
                        <div className='d-flex flex-row'>
                            <div className='back' onClick={() => push(URLS.Traders)}>
                                <FontAwesome name='long-arrow-left' className=''/>
                            </div>
                            <span className='it_light_opacity it-fs14 back-label'>Back to traders list</span>
                        </div>
                        <Col>
                            <div className='it_cycle_times' onClick={() => push(URLS.Traders)}>
                                <FontAwesome name='times' className=''/>
                            </div>
                        </Col>
                    </div>
                    <Row className='bio'>
                        <Col className='col-2 text-center' md={2} xl={2} lg={2}>
                            <img src='http://via.placeholder.com/140x140' className='rounded-circle mb-4'/>
                            <strong className='it-fs24'>Eddie Becker</strong>
                            <Badge color='warning' pill className='mt-2'>
                                <span>top 100</span>
                            </Badge>
                            <div className='d-flex flex-column it-fs13 it-half-opacity mt-3'>
                                <div>
                                    <FontAwesome name='map-marker'/> Uzbekistan
                                </div>
                                <div className='mt-1'>
                                    Member since 19.09.2017
                                </div>
                                <div className='mt-1'>
                                    218 copiers
                                </div>
                            </div>
                            <div className='d-flex flex-row mt-2'>
                                <div>
                                    <Badge color='primary' pill className='badge-2'>
                                        <span>59</span><span>/289</span>
                                    </Badge>
                                </div>
                                <div className='profit'>
                                    <div className='d-flex flex-row'>
                                        <div>
                                            <img src={require('../assets/icons/profit/profit.png')} />
                                        </div>
                                        <div className='text-left text'>
                                            <div><strong className='text-success it-fs12'>57%</strong></div>
                                            <div><span className='it-fs12 it-half-opacity'>top profit</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 mb-4'>
                                <Button color='light' className='border export_btn_big it-fs14' block>
                                    <FontAwesome name='plus' className='mr-2'/> Copy trader
                                </Button>
                            </div>
                            <div className='it-fs14 mt-4 text-left'>
                                Hello, I am a long term investor and I have started investing many years ago. I like to find stocks that are undervalued,  look to P/E, ROE, ROA compared with the industry, also I like that the stocks which earning per share grow every year. Usually I can keep an stock for months, or even for years. But sometimes if I get a big gain in few days I can sell.  I look for information in sites like yahoo, zacks and Morningstar.
                                I recommend that you copy me with more than 500 usd
                            </div>
                        </Col>
                        <Col className='col-10 section-2' md={10} xl={10} lg={10}>
                            <div className='d-flex flex-row'>
                                <strong className='it-fs16'>Return</strong>
                                <div className="d-flex flex-row it-btn-group ml-2">
                                    <div className="it-btn active">Last Year</div>
                                    <div className="it-btn"><span>Last month</span></div>
                                    <div className="it-btn it-btn_m"><span>Last week</span></div>
                                    <div className="it-btn"><span>Last day</span></div>
                                </div>
                            </div>
                            <Row>
                                <Col className='col-10' md={10} lg={10} xl={10}>

                                </Col>
                                <Col className='col-10 text-center' md={2} lg={2} xl={2}>
                                    <span className='text-success it-fs36'>64%</span>
                                    <div className='it-medium it-half-opacity'>
                                        Average Return for month
                                    </div>
                                </Col>
                            </Row>
                            <Row className='border-bottom border-top investments_trades'>
                                <Col className='col-6 investments' md={6} lg={6} xl={6}>
                                    <div className='d-flex justify-content-between'>
                                        <strong className='it-fs16'>Investments</strong>
                                        <span className='text-primary it-fs16'>See all</span>
                                    </div>
                                    {
                                        [1,2,3].map(item => (
                                            <Row className='mt-4' key={item}>
                                                <Col className='col-8' md={8} xl={8} lg={8}>
                                                    <div className='d-flex flex-row'>
                                                        <div>
                                                            <img src='https://avatars1.githubusercontent.com/u/7450663?v=3' />
                                                            <img src='https://chain.so/Bitcoin@2x.png' />
                                                        </div>
                                                        <div className='name'>
                                                            <strong className='text-primary it-fs14'>XMR/BTC</strong>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col className='col-2 text-center number' md={2} xl={2} lg={2}>
                                                    <strong className='it-fs18'>96</strong>
                                                    <div>
                                                <span className='it-fs12 it-half-opacity it-medium'>
                                                    trades
                                                </span>
                                                    </div>
                                                </Col>
                                                <Col className='col-2 text-center number' md={2} xl={2} lg={2}>
                                                    <strong className='it-fs18'>96</strong>
                                                    <div>
                                                <span className='it-fs12 it-half-opacity it-medium'>
                                                    trades
                                                </span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                </Col>
                                <Col className='col-6 trades' md={6} lg={6} xl={6}>
                                    <div className='d-flex justify-content-between'>
                                        <strong className='it-fs16'>Trades</strong>
                                    </div>
                                    <div className='text-center'>
                                        <Badge pill className='rating'>
                                            4
                                        </Badge>
                                    </div>
                                    <div className='text-center it-half-opacity it-fs12 mt-2'>
                                        average risk for last trades
                                    </div>
                                    <div className='gr-rating'>
                                        <div className='gradient' />
                                    </div>
                                    <div className='d-flex justify-content-around mt-3'>
                                        <div className='text-center'>
                                            <span className='it-fs24'>489</span>
                                            <div>
                                                <span className='it-half-opacity it-fs12'>total trades</span>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <span className='it-fs24'>489</span>
                                            <div>
                                                <span className='it-half-opacity it-fs12'>total trades</span>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <span className='it-fs24'>489</span>
                                            <div>
                                                <span className='it-half-opacity it-fs12'>total trades</span>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <span className='it-fs24'>489</span>
                                            <div>
                                                <span className='it-half-opacity it-fs12'>total trades</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className='trading_journal'>
                                <strong className='it-fs16'>Trading journal</strong>
                                <Row>
                                    <Col className='col-2' md={2} xl={2} lg={2}>
                                        <div className='time-line'>
                                            <div className='date'>
                                                <span>28</span>
                                                <div>DEC</div>
                                            </div>
                                            <div className='line' />
                                            <div className='date'>
                                                <span>26</span>
                                                <div>DEC</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className='col-10 posts' md={10} xl={10} lg={10}>
                                        <Card className='post' onClick={() => push(URLS.Post)}>
                                            <CardBody>
                                            <span className='it-fs14'>
                                                So it is critically important that you get just the right telescope for where you are and what your star gazing preferences are.
                                            </span>
                                                <div className='d-flex justify-content-between mt-4'>
                                                    <div className='it-fs14 text-primary'>
                                                        See 4 comments
                                                    </div>
                                                    <div className='it-fs14 it_light_opacity'>
                                                        <div className='d-flex flex-row'>
                                                            <div>
                                                                <FontAwesome name='thumbs-o-up' /> Like 0
                                                            </div>
                                                            <div className='share'>
                                                                <FontAwesome name='share-square-o' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-3'>
                                                    <Input placeholder='Add your comment' />
                                                </div>
                                            </CardBody>
                                        </Card>
                                        <Card className='post'>
                                            <CardBody>
                                            <span className='it-fs14'>
                                                So it is critically important that you get just the right telescope for where you are and what your star gazing preferences are.
                                            </span>
                                                <div className='d-flex justify-content-between mt-4'>
                                                    <div className='it-fs14 text-primary'>
                                                        See 4 comments
                                                    </div>
                                                    <div className='it-fs14 it_light_opacity'>
                                                        <div className='d-flex flex-row'>
                                                            <div>
                                                                <FontAwesome name='thumbs-o-up' /> Like 0
                                                            </div>
                                                            <div className='share'>
                                                                <FontAwesome name='share-square-o' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-3'>
                                                    <Input placeholder='Add your comment' />
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </BasePage>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: url => dispatch(push(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trader);