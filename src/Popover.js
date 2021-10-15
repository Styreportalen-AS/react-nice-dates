import React from 'react';
import { bool, node } from 'prop-types';
import classNames from 'classnames';
import * as ReactDOM from 'react-dom';

const Popover = React.forwardRef(({ children, open, parentRef }, ref) => {
    let topPadding = (parentRef.current?.getBoundingClientRect().top || 0) + 20;
    let left = parentRef.current?.getBoundingClientRect().left || 0;
    // + (parentRef.current?.getBoundingClientRect().width || 0);
    return ReactDOM.createPortal(
        <div
            style={{
                position: 'absolute',
                top: topPadding,
                left: left,
                // display: open ? 'block' : 'none',
                maxWidth: 350,
            }}
            className={classNames('nice-dates-popover', { '-open': open })}
            ref={ref}>
            {children}
        </div>,
        document.body,
    );
});

Popover.displayName = 'Popover';

Popover.propTypes = {
    children: node,
    open: bool,
};

export default Popover;
