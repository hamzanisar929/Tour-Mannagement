import React from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tours.css";

import tourData from "../assets/data/tours";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";

const Tours = () => {
  const [pagesCount, setPagesCount] = useState(0);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPagesCount(pages);
  }, []);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => {
              return (
                <Col lg="3" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              );
            })}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pagesCount).keys()].map((number) => {
                  return (
                    <span
                      key={number}
                      onClick={() => setPages(number)}
                      className={pages === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
