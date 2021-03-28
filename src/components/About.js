import React from 'react'
import dp from '../images/dp.jpg';
import meme from '../images/meme.jpg';
import edit from '../images/edit.jpg';
function About() {
    return (
        <div>
        
<div id="myCarousel" className="carousel slide" data-ride="carousel">
	
	<ol className="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>   

	<div className="carousel-inner">
	<h2>About Me</h2>		
		<div className="carousel-item active">
			<div className="img-box"><img src={dp} alt=""/></div>
			<p className="testimonial">I am a B.tech C.S.E student at NIT jamshedpur.I completed my 12th from DAV public school</p>
			<p className="overview"><b>Subham Kumar</b>MERN stack developer at <a href="#">NIT jamshedpur</a></p>
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div className="carousel-item">
			<div className="img-box"><img src={edit} alt=""/></div>
			<p className="testimonial">I am intrested in MERN stack development.I have worked in technologies like Reactjs ,Nodejs,Express js,Mongo DB</p>
			<p className="overview"><b>Subham Kumar</b>MERN stack developer at  <a href="#">NIT jamshedpur</a></p>
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div className="carousel-item">
			<div className="img-box"><img src={meme} alt=""/></div>
			<p className="testimonial">I am currently in 2nd year and pursuing btech 4 year Btech degree</p>
			<p className="overview"><b>Subham Kumar</b>Web Developer at <a href="#">Web Team</a></p>
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
				</ul>
			</div>
		</div>		
	</div>

	<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
		<i className="fa fa-angle-left"></i>
	</a>
	<a className="carousel-control-next" href="#myCarousel" data-slide="next">
		<i className="fa fa-angle-right"></i>
	</a>
</div>
        </div>
    )
}

export default About
