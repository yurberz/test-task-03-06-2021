import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@media screen and (min-width: 768px) {
    .container {
        width: 768px;
        padding-left: 45px;
        padding-right: 45px;
        margin-left: auto;
        margin-right: auto;

    .svg {
    width: 20px;
    height: 20px;
    }

    .btn {
    border: transparent;
    font-family: Lato-Bold;
    font-size: 20px;
    color: #ffffff;
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
    font-size: 42px;
    text-transform: uppercase;
    }
  }

  .inputContainer {
    position: relative;

    .input {
    width: 250px;
    height: 50px;
    padding: 12px;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    font-family: Lato-Regular;
    font-size: 18px;
    color: #B2B2B2;
    }

     .search {
     position: absolute;
     top: 15px;
     right: 20px;
    }
  }
}

.countries-table {
  width: 100%;
  border-spacing: 1px 20px;
  border-collapse: separate;

  font-family: Lato-Bold;
  font-size: 24px;

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
  border-radius: 4px;
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
    margin-bottom: 30px;
    font-family: Lato-Bold;
    font-size: 38px;
  }

  .modalBtn {
    padding: 10px 50px;
    background: #2196F3;
    border-radius: 20px;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    .list-item__flex:nth-child(1) {
    margin-right: 20px;
    }
    .list-item__flex:nth-child(2) {
    flex: 2;
    margin-right: 100px;
    }

    .text {
    font-size: 20px;
    color: #666666;
    }
  }

  .list-item:not(:last-child){
    margin-bottom: 30px;
  }
  .list-item:last-child {
    margin-bottom: 20px;
   }
  }
 }
}
@media screen and (min-width: 1280px) {
.container {
        width: 1280px;
        padding-left: 60px;
        padding-right: 60px;

    .svg {
    width: 30px;
    height: 30px;
  }

  .btn {
  font-size: 24px;
  }

    .header {
      .logoWrapper {
         .title {
        font-size: 72px;
      }
    }
 
  .inputContainer {
    .input {
    width: 600px;
    height: 80px;
    padding: 32px;
    
    font-size: 48px;
    }

     .search {
     position: absolute;
     top: 30px;
     right: 20px;
    }
  }
}

.contentContainer {
  .title {
    margin-bottom: 40px;
    font-size: 48px;
  }

  .modalBtn {
    padding: 10px 70px;
  }

  .list-item {
    .list-item__flex:nth-child(1) {
    margin-right: 30px;
    }
    .list-item__flex:nth-child(2) {
    flex: 2;
    margin-right: 250px;
    }

    .text {
    font-size: 24px;
    }
  }

  .list-item:not(:last-child){
    margin-bottom: 50px;
  }
  .list-item:last-child {
    margin-bottom: 40px;
  }
 }
}
}
@media screen and (min-width: 1300px) {
    .container {
        width: 100%;
    }
}
@media screen and (max-width: 767px) {
  .container {
    overflow: hidden;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;

  .svg {
    width: 15px;
    height: 15px;
  }

  .btn {
  border: transparent;
  font-family: Lato-Bold;
  font-size: 15px;
  color: #ffffff;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;

    .logoWrapper {
       display: flex;
       flex-direction: column;
       align-items: center;

       .title {
         margin-bottom: 15px;
         font-family: Lato-Bold;
         font-size: 42px;
         text-transform: uppercase;
    }
  }

  .inputContainer {
    position: relative;
    width: 100%;

    .input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    font-family: Lato-Regular;
    font-size: 16px;
    color: #B2B2B2;
    }

     .search {
     position: absolute;
     top: 15px;
     right: 20px;
    }
  }
}

.countries-table {
  width: 100%;
  border-spacing: 1px 10px;
  border-collapse: separate;

  font-family: Lato-Bold;
  font-size: 14px;

th,
td {
  padding: 10px;
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
  padding-left: 5px;
  padding-right: 5px;
  background: #30a0f9;
  border-radius: 4px;
 }
 button.ascending::after {
  content: '⬆️';
  display: inline-block;
  margin-left: 5px;
 }
 button.descending::after {
  content: '⬇️';
  display: inline-block;
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
  padding: 10px;

  .title {
    margin-bottom: 20px;
    font-family: Lato-Bold;
    font-size: 28px;
  }

  .modalBtn {
    padding: 5px 35px;
    background: #2196F3;
    border-radius: 20px;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    .list-item__flex:nth-child(1) {
    margin-right: 10px;
    }
    .list-item__flex:nth-child(2) {
    flex: 2;
    margin-right: 90px;
    }

    .text {
    font-size: 16px;
    color: #666666;
    }
  }

  .list-item:not(:last-child){
    margin-bottom: 20px;
  }
  .list-item:last-child {
    margin-bottom: 10px;
  }
  }
 }
}
`;

export default GlobalStyles;