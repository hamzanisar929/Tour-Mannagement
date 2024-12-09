import React from "react";
import "./FeaturedToursList.css";
import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";

import useFetch from "../../hooks/useFetch.js";
import { BASE_URL } from "../../utils/config";

const FeaturedToursList = () => {
  const { data: featuredTours } = useFetch(
    `${BASE_URL}/tours/search/getFeaturedTours`
  );

  console.log(featuredTours);

  return (
    <>
      {featuredTours?.map((tour) => {
        return (
          <Col key={tour.id} className="mb-4" lg="3">
            <TourCard tour={tour} />
          </Col>
        );
      })}
    </>
  );
};

export default FeaturedToursList;
