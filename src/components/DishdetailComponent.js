import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    

class DishDetail extends Component {

    renderComments (commentsArray) {
        const comments = commentsArray.map(x => {
            if(x!=null) {
                return (
                    <>
                        <CardText>{x.comment}</CardText>
                        <CardText>Rating: {x.rating}</CardText>
                        <CardText>-- {x.author}, {x.date.substring(0,10)}</CardText>
                    </>
                );
            }else{
                return (<div></div>);
            }
        });

        return comments;
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                            <CardTitle><h4>Comments</h4></CardTitle>
                            {this.renderComments(dish.comments)}
                            </CardBody>
                        </Card>
                    </div>
                </>        
            );
        }else
            return(
                <div></div>
            );
    }

    render() {
        return (
            this.renderDish(this.props.selectedDish)
        );
    }

}

export default DishDetail;