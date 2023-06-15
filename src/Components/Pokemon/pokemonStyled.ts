import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 40%;
  height: 14rem;

  border-radius: 10px;
  box-shadow: 5px 5px 5px #000;
  background-color: #cdc;

  .desc {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;

    padding: 2px 4px;
    font-size: 1.7rem;
    font-weight: bold;

    .name-id {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
      p {
        line-break: auto;
      }
    }

    .types {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
      margin-top: 1rem;
      height: 3rem;

      padding: 5px;

      .type {
        flex: 1;
        border-radius: 10px;
        text-align: center;
        font-size: 1.5rem;
      }
    }

    .link {
      padding: 2px 5px;
      margin: 1rem 0;
      display: flex;
      justify-content: center;

      a {
        width: 50%;
        text-align: center;
        padding: 4px;
        border-radius: 1.5rem;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.primary};
        border: 2px solid #000;
        box-shadow: -2px 3px 0 #000, -4px 6px 0 #000;
        color: #fff;

        &:hover {
          box-shadow: inset -2px 3px 0 #000;
        }
      }
    }
  }

  .img {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: contain;
      font-size: 2rem;
      color: #000;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
