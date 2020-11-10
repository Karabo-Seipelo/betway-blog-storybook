import React from 'react';

import { Icon, ICONS } from '../src/components/Icon/Icon';

export default {
    title: 'Design System/Icon',
    component: Icon,
    argTypes: {
        color: { control: 'color' },
    },
};

export const AllIcons = (args) => (
    <div>
        <div>
            <Icon icon={ICONS.NEWSPAPER} {...args} />
            <p>NEWSPAPER</p>
        </div>
        <div>
            <Icon icon={ICONS.PLAY} {...args} />
            <p>PLAY</p>
        </div>
        <div>
            <Icon icon={ICONS.STATSDOTS} {...args} />
            <p>STATSDOTS</p>
        </div>
        <div>
            <Icon icon={ICONS.STATSBARS} {...args} />
            <p>STATSBARS</p>
        </div>
        <div>
            <Icon icon={ICONS.TROPHY} {...args} />
            <p>TROPHY</p>
        </div>
        <div>
            <Icon icon={ICONS.FACEBOOK} {...args} />
            <p>FACEBOOK</p>
        </div>
        <div>
            <Icon icon={ICONS.WHATSAPP} {...args} />
            
            <p>WHATSAPP</p>
        </div>
        <div>
            <Icon icon={ICONS.TWITTER} {...args} />
            <p>TWITTER</p>
        </div>
    </div>
)