/**
 *
 * Users
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const Users = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log('Hi from users page');
  }, []);

  return (
    <Div>
      {t('')}

      <p> {t(...messages.title())} </p>
    </Div>
  );
});

const Div = styled.div``;
