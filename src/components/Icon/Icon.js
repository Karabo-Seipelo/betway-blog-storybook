import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GraphUp, TrophyFill } from '@styled-icons/bootstrap';

export const Icon = ({type, size, color}) => {
    const TipsterIcon = styled(GraphUp)`
        color: ${color};
    `;

    const QuizIcon = styled(TrophyFill)`
        color: ${color};
    `;

    const renderIcon = (type, size) => {
        switch (type) {
            case 'tipster':
                return <TipsterIcon size={size} />
            case 'quiz':
                return <QuizIcon size={size} />
        }
    }

    return renderIcon(type, size);
}

Icon.propTypes = {
    type: PropTypes.oneOf(['tipster', 'quiz']).isRequired,
    size: PropTypes.string,
    color: PropTypes.string
}

Icon.defaultProps = {
    color: "#81C341",
    size: "20"
}