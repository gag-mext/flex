import React from 'react';
import classNames from 'classnames';
class FlexItem extends React.Component{
  constructor(props) {
        super(props);
    }
    render() {
      let{ children, className, prefixCls, style, ...restProps } = this.props;
      const wrapCls = classNames({
        [`${prefixCls}-item`]: true,
        [className]: className,
      });
      return (
        <div className={wrapCls} style={style} {...restProps}>{children}</div>
      );
    }
}
FlexItem.defaultProps = {
    prefixCls: 'am-flexbox',
};
FlexItem.propTypes = {
  flex:React.PropTypes.number,
  /** web only */
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  onClick:React.PropTypes.func,
  children: React.PropTypes.any,
  /* touchableWithoutFeedback prop */
  onPress: React.PropTypes.any,
  onLongPress: React.PropTypes.any,
  onPressIn: React.PropTypes.any,
  onPressOut: React.PropTypes.any,
  disabled:React.PropTypes.bool
};
FlexItem.displayName = "FlexItem";
module.exports=FlexItem;
