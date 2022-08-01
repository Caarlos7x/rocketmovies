import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 0 124px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;
    align-items: flex-end;
    width: 125px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      align-items: right;
      justify-content: right;
    }

    strong {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      align-items: right;
      justify-content: right;
    }
  }
`;
export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
  
`;
export const Search = styled.div`
  grid-area: search;
  width: 100%;
  height: auto;
  padding: 24px 100px 0;
`;