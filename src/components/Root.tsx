import { useEffect, useRef, useState } from 'react';
import { ModalProvider } from '@react-aria/overlays';
import { StyleSheetManager } from 'styled-components';

import {
  BASE_STYLES,
  BaseProps,
  BLOCK_STYLES,
  extractStyles,
  filterBaseProps,
  tasty,
} from '../tasty';
import { Provider } from '../provider';
import { TOKENS } from '../tokens';

import { PortalProvider } from './portal';
import { GlobalStyles } from './GlobalStyles';
import { AlertDialogApiProvider } from './overlays/AlertDialog';
import { NotificationsProvider } from './overlays/NewNotifications';

const RootElement = tasty({
  id: 'cube-ui-kit-root',
  className: 'root',
});

const DEFAULT_STYLES = {
  display: 'block',
  preset: 't3',
  ...Object.keys(TOKENS).reduce((map, key) => {
    map[`@${key}`] = TOKENS[key];

    return map;
  }, {}),
};
const STYLES = [...BASE_STYLES, ...BLOCK_STYLES];

export interface CubeRootProps extends BaseProps {
  tokens?: { [key: string]: string };
  bodyStyles?: { [key: string]: string };
  fonts?: boolean;
  publicUrl?: string;
  router?: any;
  font?: string;
  monospaceFont?: string;
  applyLegacyTokens?: boolean;
}

export function Root(allProps: CubeRootProps) {
  let {
    children,
    /** Raw css styles for body element */
    bodyStyles,
    fonts,
    publicUrl,
    router,
    font,
    monospaceFont,
    applyLegacyTokens,
    ...props
  } = allProps;

  const ref = useRef(null);

  const [rootRef, setRootRef] = useState();

  useEffect(() => {
    if (!rootRef) {
      // @ts-ignore
      setRootRef(ref?.current);
    }
  }, []);

  const styles = extractStyles(props, STYLES, DEFAULT_STYLES);

  return (
    <Provider router={router} root={rootRef}>
      <StyleSheetManager disableVendorPrefixes>
        <RootElement
          ref={ref}
          {...filterBaseProps(props, { eventProps: true })}
          styles={styles}
        >
          <GlobalStyles
            bodyStyles={bodyStyles}
            applyLegacyTokens={applyLegacyTokens}
            publicUrl={publicUrl}
            fonts={fonts}
            font={font}
            monospaceFont={monospaceFont}
          />
          <ModalProvider>
            <PortalProvider value={ref}>
              <NotificationsProvider rootRef={ref}>
                <AlertDialogApiProvider>{children}</AlertDialogApiProvider>
              </NotificationsProvider>
            </PortalProvider>
          </ModalProvider>
        </RootElement>
      </StyleSheetManager>
    </Provider>
  );
}
