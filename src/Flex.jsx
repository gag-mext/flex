import '../style';
const React =require( 'react');
const classNames =require( 'classnames');

class Flex extends React.Component{
  constructor(props) {
        super(props);
    }
  render() {
    let {
      direction, wrap, justify, align, alignContent, className, children, prefixCls, style, ...restProps,
    } = this.props;
    const wrapCls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-dir-row`]: direction === 'row',
      [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
      [`${prefixCls}-dir-column`]: direction === 'column',
      [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

      [`${prefixCls}-nowrap`]: wrap === 'nowrap',
      [`${prefixCls}-wrap`]: wrap === 'wrap',
      [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

      [`${prefixCls}-justify-start`]: justify === 'start',
      [`${prefixCls}-justify-end`]: justify === 'end',
      [`${prefixCls}-justify-center`]: justify === 'center',
      [`${prefixCls}-justify-between`]: justify === 'between',
      [`${prefixCls}-justify-around`]: justify === 'around',

      [`${prefixCls}-align-top`]: align === 'top' || align === 'start',
      [`${prefixCls}-align-middle`]: align === 'middle' || align === 'center',
      [`${prefixCls}-align-bottom`]: align === 'bottom' || align === 'end',
      [`${prefixCls}-align-baseline`]: align === 'baseline',
      [`${prefixCls}-align-stretch`]: align === 'stretch',

      [`${prefixCls}-align-content-start`]: alignContent === 'start',
      [`${prefixCls}-align-content-end`]: alignContent === 'end',
      [`${prefixCls}-align-content-center`]: alignContent === 'center',
      [`${prefixCls}-align-content-between`]: alignContent === 'between',
      [`${prefixCls}-align-content-around`]: alignContent === 'around',
      [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch',

      [className]: className,
    });

    return (
      <div className={wrapCls} style={style} {...restProps}>
        {children}
      </div>
    );
  }
}
Flex.defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center',
    onClick: () => {},
};
Flex.propTypes = {
  /** web only */
  prefixCls:React.PropTypes.string,
  /** web only */
  className:React.PropTypes.string,
  direction: React.PropTypes.oneOf(['row','row-reverse','column','column-reverse']),
  wrap:React.PropTypes.oneOf(['nowrap','wrap','wrap-reverse']),
  justify:React.PropTypes.oneOf(['start','end','center','between','around']),
  align: React.PropTypes.oneOf(['top','start','middle','center','bottom','end','baseline','stretch']),
  alignContent:React.PropTypes.oneOf(['start','end','center','between','around','stretch']),
  children: React.PropTypes.any,
  /** web only */
  onClick:React.PropTypes.func
};
Flex.displayName = "Flex";
module.exports=Flex;
