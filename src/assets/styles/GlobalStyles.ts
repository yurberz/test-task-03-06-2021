import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
.container {
    overflow: hidden;
    width: 100%;
    padding-left: 60px;
    padding-right: 60px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logoWrapper {
       display: flex;
       align-items: center;

       .title {
          font-family: Lato-Bold;
          font-size: 72px;
          line-height: 84px;
          color: #000000;
    }
  }

    .input {
    width: 600px;
    height: 80px;
    padding: 32px;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    font-family: Lato-Regular;
    font-size: 48px;
    line-height: 56px;
    color: #B2B2B2;
  }

    .search {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 86px;
    right: 80px;
  }
}

table {
  width: 100%;
  border-spacing: 1px 20px;
  border-collapse: separate;

  font-family: Lato-Bold;
  font-size: 24px;
  line-height: 28px;
}

th,
td {
  padding: 20px;
}

th:not(:first-child) {
  text-align: start;
}
td:first-child {
  text-align: center;
}

th:nth-child(1) {
  width: 5%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
th:nth-child(2) {
  width: 65%;
}
th:nth-child(3) {
  width: 30%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

td:nth-child(1) {
  border-right: 1px solid #b2b2b2;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
td:nth-child(3) {
  border-left: 1px solid #b2b2b2;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

thead tr {
  background: #2196f3;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
}
tbody tr {
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
`;

export default GlobalStyles;