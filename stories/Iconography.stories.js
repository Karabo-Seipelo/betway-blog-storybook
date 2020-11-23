import React from 'react';
import styled from 'styled-components';

import { Icon, ICONS } from '../src/components/Icon/Icon';
import { Container, Row, Col } from 'reactstrap';

export default {
    title: 'Other/Style Guide',
    component: Icon,
    argTypes: {
        color: { control: 'color' },
    },
};

const Square = styled.div`
    min-height: 150px;
    position: relative;
    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
  
`;

const IconName = ({children}) => {
    return (
        <div className="name text-muted text-decoration-none text-center pt-1 mb-2 mt-2">
            {children}
        </div>
    )
}

export const Iconography = (args) => (
    <Container>
        <Row>
            <Col>
                <h1>
                    Iconography
                </h1>
                <small className="text-muted">Use of iconography on Betway Blog</small>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>
                    Article Type Icons
                </h4>
                <br />
            </Col>
        </Row>
        <Row>
            <Col sm="3">
                <Square className="p-3 py-4 mb-2 mt-2 bg-light text-center rounded">
                    <Icon type="NEWSPAPER" {...args} />
                </Square>
                <IconName>NEWSPAPER</IconName>
            </Col>
            <Col sm="3">
                <Square className="p-3 py-4 mb-2 mt-2 bg-light text-center rounded"> 
                    <Icon type="PLAY" {...args} />
                </Square>
                <IconName>PLAY</IconName>
            </Col>
            <Col sm="3">
                <Square className="p-3 py-4 mb-2 mt-2 bg-light text-center rounded">
                    <Icon type="STATSDOTS" {...args} />
                </Square>
                <IconName>STATSDOTS</IconName>
            </Col>
            <Col sm="3">
                <Square className="p-3 py-4 mb-2 mt-2 bg-light text-center rounded">
                    <Icon type="STATSBARS" {...args} />
                </Square>
                <IconName>STATSBARS</IconName>
            </Col>
            <Col sm="3">
                <Square className="p-3 py-4 mb-2 mt-2 bg-light text-center rounded">
                    <Icon type="TROPHY" {...args} />
                </Square>
                <IconName>TROPHY</IconName>
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>
                    Social Icons
                </h4>
                <br/>
            </Col>
        </Row>
        <Row>
            <Col sm="3">
                <Square className="p-3 py-4 mb-2 mt-2 bg-light text-center rounded">
                    <Icon type="FACEBOOK" {...args} />
                </Square>
                <IconName>FACEBOOK</IconName>
            </Col>
            <Col sm="3">
                <Square className="p-3 py-4 mb-2 mt-2 bg-light text-center rounded">
                    <Icon type="WHATSAPP" {...args} />
                </Square>
                <IconName>WHATSAPP</IconName>
            </Col>
            <Col sm="3">
                <Square className="p-3 py-4 mb-2 mt-2 bg-light text-center rounded">
                    <Icon type="TWITTER" {...args} />
                </Square>
                <IconName>TWITTER</IconName>
            </Col>
        </Row>
    </Container>
)