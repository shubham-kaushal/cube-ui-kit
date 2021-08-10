import { chain } from '@react-aria/utils';
import { Button, CubeButtonProps } from '../../atoms/Button/Button';
import { Content } from '../../components/Content';
import { CubeDialogProps, Dialog } from '../../atoms/Dialog/Dialog';
import { DialogContext } from '../../atoms/Dialog/context';
import { Divider } from '../../components/Divider';
import { Title } from '../../components/Title';
import { forwardRef, useContext } from 'react';
import { ButtonGroup } from '../../atoms/ButtonGroup/ButtonGroup';

export interface CubeAlertDialogProps extends CubeDialogProps {
  /** Whether the dialog is an important prompt */
  danger?: boolean;
  primaryProps?: CubeButtonProps;
  secondaryProps?: CubeButtonProps;
  cancelProps?: CubeButtonProps;
  title?: string;
}

/**
 * AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
 */
function AlertDialog(props: CubeAlertDialogProps, ref) {
  let { onClose = () => {} } = useContext(DialogContext) || {};

  let {
    danger,
    children,
    primaryProps = {},
    secondaryProps,
    cancelProps,
    title,
    ...otherProps
  } = props;

  if (!primaryProps.label) {
    primaryProps.label = 'Ok';
  }

  let confirmType: CubeButtonProps['type'] = 'primary';

  if (danger) {
    confirmType = 'danger';
  }

  return (
    <Dialog role="alertdialog" ref={ref} {...otherProps}>
      <Title>{title}</Title>
      <Divider />
      <Content>{children}</Content>
      <ButtonGroup align="end">
        <Button
          type={confirmType}
          {...primaryProps}
          onPress={(e) =>
            chain(
              primaryProps.onPress && primaryProps.onPress(e),
              onClose('primary'),
            )
          }
        />
        {secondaryProps && (
          <Button
            {...secondaryProps}
            onPress={(e) =>
              chain(
                secondaryProps?.onPress && secondaryProps?.onPress(e),
                onClose('secondary'),
              )
            }
          />
        )}
        {cancelProps && (
          <Button
            {...cancelProps}
            onPress={(e) =>
              chain(
                cancelProps?.onPress && cancelProps?.onPress(e),
                onClose('cancel'),
              )
            }
          />
        )}
      </ButtonGroup>
    </Dialog>
  );
}

/**
 * AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
 */
let _AlertDialog = forwardRef(AlertDialog);
_AlertDialog.displayName = 'AlertDialog';
export { _AlertDialog as AlertDialog };