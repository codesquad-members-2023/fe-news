import './components/index';
import './pages/index';

const svg = document.createElement('svg');
var circle = document.createElementNS('src/assets/icons/plus.svg', 'circle');

circle.setAttributeNS(null, 'cx', '12');
circle.setAttributeNS(null, 'cy', '12');
circle.setAttributeNS(null, 'r', '12');
circle.setAttributeNS(null, 'fill', '#f72');
circle.setAttributeNS(null, 'stroke', 'none');

svg.appendChild(circle);
document.body.append(svg);
