import { useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom";
import { Container, TableRow, Col } from "@material-ui/core";
import ReviewForm from '../reviewForm/ReviewForm';
import React from "react";

const Reviews = ({getMovieData, movie, reviews, SetReviews}) => {
            const revText = useRef();
            let params = useParams();
            const movieId = params.movieId;

            const addReview = async (e) =>{
                e.preventDefault();
                const rev = revText.current;
                const response = await api.post("/api/v1/reviews", {reviewBody:rev.value,imdbId:movieId});
                const updatedReviews = [...reviews,{body:rev.value}]
            }

            useEffect(()=>{
                getMovieData(movieId);
            },[])

            return(
                <Container>
                    <Row>
                        <Col>
                            <h3>
                                Reviews
                            </h3> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={movie?.poster} alt=""/>
                        </Col>
                        <Col>
                            {
                                <>
                                    <Row>
                                        <Col>
                                            <ReviewForm handleSubmit={addReview} revText={revText} labelText ="Have a Review ??"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr/>
                                        </Col>
                                    </Row>
                                </>
                            }
                            {
                                reviews?.map((r)=>{
                                    return(
                                        <>
                                        <Row>
                                            <Col>
                                                {r.body}
                                            </Col>
                                        </Row>
                                        </>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            )
}

export default Reviews