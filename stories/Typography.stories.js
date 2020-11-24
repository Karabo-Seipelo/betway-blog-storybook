import React from 'react';
import styled from 'styled-components';

import { HeadLine, TeaserText, BodyText } from '../src/components/Typography/Typography';
import { Container, Row, Col } from 'reactstrap';

export default {
    title: 'Other/Style Guide',
    argTypes: {
        color: { control: 'color' },
    },
};

export const Typography = (args) => (
    <Container>
        <Row>
            <Col>
                <h1>
                    Typography
                </h1>
                <small className="text-muted">Use of iconography on Betway Blog</small>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col sm="7">
                <h5>Nunito Sans</h5>
                <h2>30/36</h2>
                <small className="text-muted">Example usage</small>
                <h4>Page titles</h4>
            </Col>
            <Col sm="5">
                <HeadLine>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit augue id sapien vulputate dapibus. Cras nec viverra sem. In fringilla felis nisl, eu placerat nibh euismod sit amet. Nunc eget pulvinar lorem.</HeadLine>
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col sm="7">
                <h5>Nunito Sans</h5>
                <h2>22/24</h2>
                <small className="text-muted">Example usage</small>
                <h4>Page titles</h4>
            </Col>
            <Col sm="5">
                <TeaserText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit augue id sapien vulputate dapibus. Cras nec viverra sem. In fringilla felis nisl, eu placerat nibh euismod sit amet. Nunc eget pulvinar lorem.</TeaserText>
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col sm="7">
                <h5>Nunito Sans</h5>
                <h2>18/26</h2>
                <small className="text-muted">Example usage</small>
                <h4>boby</h4>
            </Col>
            <Col sm="5">
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit augue id sapien vulputate dapibus. Cras nec viverra sem. In fringilla felis nisl, eu placerat nibh euismod sit amet. Nunc eget pulvinar lorem.</BodyText>
            </Col>
        </Row>
    </Container>
)