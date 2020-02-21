import React from "react";

import { Carousel } from "react-bootstrap";

const SlideCarousel = () => {
	return (
		<Carousel className="mx-auto" id="bmw-carousel" wrap={false}>
			<Carousel.Item>
				<img className="d-block w-100" src="https://www.bmwusa.com/content/dam/bmwusa/8Series/BMW-MY19-8Series-Overview-Carousel-01.jpg" />
				<Carousel.Caption>
					<div className="section-classic-cues mt-5">
						<h2 className="text-center" style={{ fontWeight: "300" }}>
							CLASSIC CUES
						</h2>
					</div>
					<div className="classic-cues-text my-4 text-center mx-auto">
						<p>The active kidney grille, a signature element of BMW design, is dramatically enlarged for a bolder first impression.</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="https://www.bmwusa.com/content/dam/bmwusa/8Series/BMW-MY19-8Series-Overview-Carousel-02.jpg" />
				<Carousel.Caption>
					<div className="section-classic-cues mt-5">
						<h2 className="text-center" style={{ fontWeight: "300" }}>
							SOPHISTICATED AND STYLISH
						</h2>
					</div>
					<div className="classic-cues-text my-4 text-center mx-auto">
						<p>Every element of the 8 Series Coupe is precisely crafted to stir the senses – right down to the stitching on the leather-upholstered Multi-Functional Seats.</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100" src="https://www.bmwusa.com/content/dam/bmwusa/8Series/BMW-MY19-8Series-Overview-Carousel-03.jpg" />
				<Carousel.Caption>
					<div className="section-classic-cues mt-5">
						<h2 className="text-center" style={{ fontWeight: "300" }}>
							POWER PROFILE
						</h2>
					</div>
					<div className="classic-cues-text my-4 text-center mx-auto">
						<p>The bold, aggressive 8 Series Coupe design easily captures the combination of high-performance heritage and effortless luxury.</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100" src="https://www.bmwusa.com/content/dam/bmwusa/8Series/BMW-MY19-8Series-Overview-Carousel-04.jpg" />
				<Carousel.Caption>
					<div className="section-classic-cues mt-5">
						<h2 className="text-center" style={{ fontWeight: "300" }}>
							INTEGRATED TECHNOLOGY
						</h2>
					</div>
					<div className="classic-cues-text my-4 text-center mx-auto">
						<p>The latest driving technology, including BMW's most advanced iDrive system, has been specifically designed to seamlessly enhance the driver's environment.</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100" src="https://www.bmwusa.com/content/dam/bmwusa/8Series/BMW-MY19-8Series-Overview-Carousel-05.jpg" />
				<Carousel.Caption>
					<div className="section-classic-cues mt-5">
						<h2 className="text-center" style={{ fontWeight: "300" }}>
							LASER FOCUSED
						</h2>
					</div>
					<div className="classic-cues-text my-4 text-center mx-auto">
						<p>Strike a stunning note every night. The 8 Series Coupe features the advanced design of Icon Adaptive LED Headlights with Laserlight as standard.</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default SlideCarousel;
