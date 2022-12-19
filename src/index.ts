import './styles.scss';
import foo from './view/main/startPage/productsSection/common';
const page = foo();

const body = document.querySelector<HTMLElement>('body');
if (body) body.appendChild(page);