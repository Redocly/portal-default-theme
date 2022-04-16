import React from '@portal/react';
import styled from '@portal/styled-components';
import { mediaQueries } from '@portal/media-css';

export function MobileSidebarButton({ opened, children }) {
  return <Wrapper opened={opened} data-component-name="Sidebar/MobileSidebarButton">{children}</Wrapper>
}

const Wrapper = styled.span<{ opened?: boolean }>`
  background-color: var(--color-primary-500);
  width: 55px;
  user-select: none;
  height: 55px;
  bottom: 44px;
  cursor: pointer;
  position: fixed;
  right: 20px;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
  border-radius: 50%;
  transform: ${props => (props.opened ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.75s;

  ${mediaQueries.medium} {
    display: none;
    transform: rotate(180deg);
  }

  ${mediaQueries.print} {
    display: none !important;
  }

  :after {
    content: '';
    display: inline-block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 25px;
    height: 25px;
    background-color: var(--color-primary-contrast);
    -webkit-mask: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 294.842 294.842' style='enable-background:new 0 0 294.842 294.842;' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23fff' d='M292.128,214.846c-2.342-2.344-6.143-2.344-8.484,0l-59.512,59.511V6c0-3.313-2.687-6-6-6s-6,2.687-6,6v268.356 l-59.513-59.512c-2.342-2.342-6.142-2.343-8.485,0.001c-2.343,2.343-2.343,6.142,0.001,8.485l69.755,69.754 c1.171,1.171,2.707,1.757,4.242,1.757s3.071-0.586,4.242-1.758l69.754-69.754C294.472,220.987,294.472,217.188,292.128,214.846z'/%3E%3Cpath fill='%23fff' d='M6.956,12h180.137c3.313,0,6-2.687,6-6s-2.687-6-6-6H6.956c-3.313,0-6,2.687-6,6S3.643,12,6.956,12z'/%3E%3Cpath fill='%23fff' d='M6.956,82.228h180.137c3.313,0,6-2.687,6-6s-2.687-6-6-6H6.956c-3.313,0-6,2.687-6,6S3.643,82.228,6.956,82.228z'/%3E%3Cpath fill='%23fff' d='M6.956,152.456h180.137c3.313,0,6-2.687,6-6s-2.687-6-6-6H6.956c-3.313,0-6,2.687-6,6S3.643,152.456,6.956,152.456z'/%3E%3Cpath fill='%23fff' d='M124.438,210.685H6.956c-3.313,0-6,2.687-6,6s2.687,6,6,6h117.482c3.313,0,6-2.687,6-6S127.752,210.685,124.438,210.685z' /%3E%3Cpath fill='%23fff' d='M124.438,280.912H6.956c-3.313,0-6,2.687-6,6s2.687,6,6,6h117.482c3.313,0,6-2.687,6-6S127.752,280.912,124.438,280.912z' /%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A")
      no-repeat 50% 50%;
    mask: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 294.842 294.842' style='enable-background:new 0 0 294.842 294.842;' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23fff' d='M292.128,214.846c-2.342-2.344-6.143-2.344-8.484,0l-59.512,59.511V6c0-3.313-2.687-6-6-6s-6,2.687-6,6v268.356 l-59.513-59.512c-2.342-2.342-6.142-2.343-8.485,0.001c-2.343,2.343-2.343,6.142,0.001,8.485l69.755,69.754 c1.171,1.171,2.707,1.757,4.242,1.757s3.071-0.586,4.242-1.758l69.754-69.754C294.472,220.987,294.472,217.188,292.128,214.846z'/%3E%3Cpath fill='%23fff' d='M6.956,12h180.137c3.313,0,6-2.687,6-6s-2.687-6-6-6H6.956c-3.313,0-6,2.687-6,6S3.643,12,6.956,12z'/%3E%3Cpath fill='%23fff' d='M6.956,82.228h180.137c3.313,0,6-2.687,6-6s-2.687-6-6-6H6.956c-3.313,0-6,2.687-6,6S3.643,82.228,6.956,82.228z'/%3E%3Cpath fill='%23fff' d='M6.956,152.456h180.137c3.313,0,6-2.687,6-6s-2.687-6-6-6H6.956c-3.313,0-6,2.687-6,6S3.643,152.456,6.956,152.456z'/%3E%3Cpath fill='%23fff' d='M124.438,210.685H6.956c-3.313,0-6,2.687-6,6s2.687,6,6,6h117.482c3.313,0,6-2.687,6-6S127.752,210.685,124.438,210.685z' /%3E%3Cpath fill='%23fff' d='M124.438,280.912H6.956c-3.313,0-6,2.687-6,6s2.687,6,6,6h117.482c3.313,0,6-2.687,6-6S127.752,280.912,124.438,280.912z' /%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A")
      no-repeat 50% 50%;
  }
`;
