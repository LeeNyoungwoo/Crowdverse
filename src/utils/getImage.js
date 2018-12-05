import source0 from './source0.jpg';
import source1 from './source1.jpg';
import source2 from './source2.jpg';
import source3 from './source3.jpg';
import source4 from './source4.jpg';
import source5 from './source5.jpg';
import source6 from './source6.jpg';
import source7 from './source7.jpg';
import source8 from './source8.jpg';
import source9 from './source9.jpg';
import else1 from './else1.jpg';

const getImage = (imageSrc) => {
	if (imageSrc === "source0") {return source0}
	else if (imageSrc === "source1") {return source1}
	else if (imageSrc === "source2") {return source2}
	else if (imageSrc === "source3") {return source3}
	else if (imageSrc === "source4") {return source4}
	else if (imageSrc === "source5") {return source5}
	else if (imageSrc === "source6") {return source6}
	else if (imageSrc === "source7") {return source7}
	else if (imageSrc === "source8") {return source8}
	else if (imageSrc === "source9") {return source9}
	else if (imageSrc === "individual") {return null}
	else {return else1}
}

export default getImage;