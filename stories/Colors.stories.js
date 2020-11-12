import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

export default {
    title: 'Other/Style Guide',
};

const Palette = ({children, colour}) => {

    const ColourPalette = styled.div`
        margin-bottom: 8px;
        width: 148px;
        height: 148px;
        background: ${colour};;
        border: 1px solid ${colour};;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
    `;

    const Card = styled.div`
        display: inline-block;
        float: left;
        small {
            text-transform: uppercase;
        }
    `;

    return (
        <Card>
            <ColourPalette />
            <p><strong>{children}</strong> <br/> <small className="text-muted">{colour}</small></p>
        </Card>
    )
}

export const Colours = (args) => (
    <Container>
        <Row>
            <Col>
                <h1>
                    Core Palette
                </h1>
                <small className="text-muted">How Betway is expressed through colour</small>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col sm="7">
                <h2>Core Brand</h2>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit augue id sapien vulputate dapibus. Cras nec viverra sem. In fringilla felis nisl, eu placerat nibh euismod sit amet. Nunc eget pulvinar lorem.</small>
            </Col>
            <Col sm="5">
                <Palette colour="#81C341">Money Green</Palette>
                <Palette colour="#000">Black</Palette>
            </Col>
        </Row>
        <Row>
            <Col sm="7">
                <h2>Background</h2>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit augue id sapien vulputate dapibus. Cras nec viverra sem. In fringilla felis nisl, eu placerat nibh euismod sit amet. Nunc eget pulvinar lorem.</small>
            </Col>
            <Col sm="5">
                <Palette colour="#efefef">Gray</Palette>
                <Palette colour="#121212">Black</Palette>
                <Palette colour="#232323">Black</Palette>
            </Col>
        </Row>
        <Row>
            <Col sm="7">
                <h2>Typography</h2>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit augue id sapien vulputate dapibus. Cras nec viverra sem. In fringilla felis nisl, eu placerat nibh euismod sit amet. Nunc eget pulvinar lorem.</small>
            </Col>
            <Col sm="5">
                <Palette colour="#222">Black</Palette>
                <Palette colour="#999">Black</Palette>
            </Col>
        </Row>
    </Container>
)