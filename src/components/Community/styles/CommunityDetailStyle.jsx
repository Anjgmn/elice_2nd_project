import styled from 'styled-components';

export const CommunityDetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 80%;
  height: 80%;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 40px;
`;

export const CommunityDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommunityDetailTitle = styled.h1`
  font-size: 40px;
`;

export const CommunityDetailAuthor = styled.p`
  font-size: 18px;
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 5px 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;

export const CommunityDetailImage = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
`;

export const CommunityDetailContent = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const CommunityDetailCommentTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  width: 10%;
  text-align: center;
  border-radius: 10px;
  padding: 5px 10px;
  border: none;
  background-color: whitesmoke;
`;

export const CommunityDetailDivider = styled.hr`
  border: 1px solid #ccc;
  margin: 20px 0;
`;

export const CommunityDetailComments = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  div {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;

    h4 {
      font-size: 22px;
      margin-bottom: 16px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      margin-bottom: 10px;
    }

    button {
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      color: #333;
      align-self: flex-end;

      &:hover {
        background-color: #47b781;
        color: #fff;
      }
    }
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;

  button {
    border-radius: 10px;
    padding: 5px 10px;
    border: none;
    font-weight: bold;

    &:hover {
      background-color: #47b781;
      color: #fff;
    }
  }
`;
