import React from "react";
import Card from "@mui/material/Card";

import styles from "./Card.module.css";
import type { dispatchAction } from "../Layouts/DataInputSources/DataInputSources";

export interface ICardData {
  imgSrc: any;
  heading: string;
  subText: string;
  inputType: "radio" | "checkbox";
  name: string;
  checked: boolean;
}

interface ICard {
  title: string;
  cardData: ICardData[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, action: dispatchAction) => void;
  action: dispatchAction;
}

const CardSection: React.FC<ICard> = ({ title, cardData, action, onChange }) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debugger;
    if (onChange) {
      onChange(e, action);
    }
  }
  return (
    <section className={styles.card_container}>
      <p className={styles.title}>{title}</p>

      {cardData && cardData.length && (
        <section className={styles.card_content_section}>
          {cardData.map((data, index) => (
            <Card className={styles.card}>
              <div key={index}>
                <img src={data.imgSrc} alt={"Image for" + data.heading} />
                <input
                  type={data.inputType}
                  name={data.name}
                  checked={data.checked}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <h5>{data.heading}</h5>
              <p>{data.subText}</p>
            </Card>
          ))}
        </section>
      )}
    </section>
  );
};

export default CardSection;
