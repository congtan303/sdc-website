import React from "react";
import { Container } from "react-bootstrap";
import "./BannerDetail.css";

const BannerDetail = (props) => {
  return (
    <section className="banner-project no-padding">
      <div class="inner-header-title">
        <img src={props.imgBanner} class="img-fluid" alt="" />
        <div class="inner-header-title-caps title-detailBanner">
          <Container>
            <p>
              <b>{props.titleB}</b> {props.titleP}
            </p>
            <h2>{props.titleH2}</h2>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default BannerDetail;
