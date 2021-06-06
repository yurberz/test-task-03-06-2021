import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
.container {
    overflow: hidden;
    width: 100%;
    padding-left: 60px;
    padding-right: 60px;

    .svg {
    width: 30px;
    height: 30px;
  }
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
          text-transform: uppercase;
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
    
    position: absolute;
    top: 86px;
    right: 80px;
  }
}

.countries-table {
  width: 100%;
  border-spacing: 1px 20px;
  border-collapse: separate;

  font-family: Lato-Bold;
  font-size: 24px;
  line-height: 28px;

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

  cursor: pointer;
 }
 tbody tr:hover {
   background-color: rgba(0, 0, 0, 0.25);
 }

 button {
  padding-left: 10px;
  padding-right: 10px;
  background: #30a0f9;
  border: transparent;
  border-radius: 4px;

  font-family: Lato-Bold;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
 }
 button.ascending::after {
  content: '⬆️';
  display: inline-block;
  margin-left: 10px;
 }
 button.descending::after {
  content: '⬇️';
  display: inline-block;
  margin-left: 10px;
 }
}

.modalContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;

  .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        box-shadow: 0px 22px 40px 0px rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
    }
}

.contentContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .title {
    margin-bottom: 40px;
    font-family: Lato-Bold;
    font-size: 48px;
    line-height: 56px;
  }

  .modalBtn {
    padding: 10px 70px;
    background: #2196F3;
    border: transparent;
    border-radius: 20px;

    font-family: Lato-Bold;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    .list-item__child:nth-child(1) {
    margin-right: 30px;
    }
    .list-item__child:nth-child(2) {
    flex: 2;
    margin-right: 250px;
    }

    .text {
    font-size: 24px;
    line-height: 28px;

    color: #666666;
    }
  }

  .list-item:not(:last-child){
    margin-bottom: 50px;
  }
  .list-item:last-child {
    margin-bottom: 40px;
  }
}
`;

export default GlobalStyles;