import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.COLORS.GRAY_700};
   padding: 24px; /* espaçamento interno */
`;