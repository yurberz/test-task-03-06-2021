import sprite from "../../assets/images/sprite.svg";

import { TCountry } from '../../helpers/types'

interface IContentModal {
  data: TCountry,
  closeModal: () => void
}

const ContentModal = ({ data, closeModal }: IContentModal) => {
  const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = data;
  return (
    <div className="contentContainer">
      <p className="title">{Country}</p>
      <ul className="list">
        <li className="list-item">
          <svg className="svg heart list-item__child">
            <use href={sprite + "#heart"}></use>
          </svg>
          <p className="text list-item__child">Total Confirmed</p>
          <p className="text list-item__child">{TotalConfirmed}</p>
        </li>
        <li className="list-item">
          <svg className="svg skull list-item__child">
            <use href={sprite + "#skull"}></use>
          </svg>
          <p className="text list-item__child">Total Deaths</p>
          <p className="text list-item__child">{TotalDeaths}</p>
        </li>
        <li className="list-item">
          <svg className="svg health list-item__child">
            <use href={sprite + "#health"}></use>
          </svg>
          <p className="text list-item__child">Total Recovered</p>
          <p className="text list-item__child">{TotalRecovered}</p>
        </li>
      </ul>
      <button className="modalBtn" type="button" onClick={closeModal}>
        OK
      </button>
    </div>
  );
};

export default ContentModal;
