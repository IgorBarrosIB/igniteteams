import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.COLORS.GRAY_700};
   padding: 24px; /* espaçamento interno */
`;

export const TextLogin = styled.Text`
   font-size: ${({theme}) => theme.FONT_SIZE.MD};
   font-family: ${({theme}) => theme.FONT_FAMILY.Roboto_700Bold};
`;
