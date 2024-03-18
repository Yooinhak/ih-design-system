import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';

import { LabelSection, StyledButton } from './style';

/**
 * @param {'s' | 'm' | 'l'} props.size
 * @param {'left', 'right'} props.iconPosition
 */
const Component = ({
  type,
  size = 'S',
  outline,
  icon,
  iconPosition,
  error,
  label,
  loading,
  onClick,
  disabled,
  width = 'auto',
}) => {
  // TODO: 로딩 스피너 작업 완료시 적용

  const renderChild = () => {
    return (
      <LabelSection>
        {iconPosition === 'left' && (icon || <FiCheck />)}
        <div type={'body'} size="s" weight="regular">
          {label}
        </div>
        {iconPosition === 'right' && (icon || <FiCheck />)}
      </LabelSection>
    );
  };
  return (
    <StyledButton
      type={type}
      size={size}
      outline={outline}
      icon={icon}
      iconPosition={iconPosition}
      error={error}
      disabled={disabled}
      $width={width}
      onClick={e => {
        if (loading) {
          return;
        } else {
          onClick && onClick(e);
        }
      }}
    >
      {renderChild()}
    </StyledButton>
  );
};

Component.defaultProps = {
  size: 'm',
  label: 'button',
  disabled: false,
  type: 'button',
};

Component.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  outline: PropTypes.bool,
  icon: PropTypes.any,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Component;
