import sprite from "../../assets/images/sprite.svg";

import { IContentModal } from '../../helpers/interfaces'
import Button from "../shared/Button";

const ContentModal = ({ data, closeModal }: IContentModal) => {
  const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = data;

  return (
    <div className="contentContainer">
      <p className="title">{Country}</p>
      <ul className="list">
        <li className="list-item">
          <svg className="svg heart list-item__flex">
            <use href={sprite + "#heart"}></use>
          </svg>
          <p className="text list-item__flex">Total Confirmed</p>
          <p className="text list-item__flex">{TotalConfirmed}</p>
        </li>
        <li className="list-item">
          <svg className="svg skull list-item__flex">
            <use href={sprite + "#skull"}></use>
          </svg>
          <p className="text list-item__flex">Total Deaths</p>
          <p className="text list-item__flex">{TotalDeaths}</p>
        </li>
        <li className="list-item">
          <svg className="svg health list-item__flex">
            <use href={sprite + "#health"}></use>
          </svg>
          <p className="text list-item__flex">Total Recovered</p>
          <p className="text list-item__flex">{TotalRecovered}</p>
        </li>
      </ul>

      <Button className='modalBtn' title='OK' onClick={closeModal} />
    </div>
  );
};

export default ContentModal;
