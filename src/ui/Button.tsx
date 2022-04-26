import React from 'react';
import { LinkProps } from 'react-router-dom';

import { Link } from '@portal/Link';
import { Button as RefDocsButton, ButtonProps } from '@redocly/reference-docs';

const StyledButtonAsLink = RefDocsButton.withComponent(Link);

export function Button(
  props: ButtonProps & Partial<LinkProps<never>> & { ref?: any; external?: boolean },
) {
  if (props.to) {
    return <StyledButtonAsLink {...props} role="button" data-component-name="ui/Button" />;
  } else {
    return <RefDocsButton {...(props as ButtonProps)} role="button" data-component-name="ui/Button" />;
  }
}
