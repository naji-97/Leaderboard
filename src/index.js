import './style.css';
import { formAction, refreshAction } from './js/mainFunctions.js';
import ScoreBoard from './js/ScoreBoard.js';
import idGenerator from './js/idGenerator.js';

idGenerator();
const scorFun = new ScoreBoard();

formAction();
refreshAction();

scorFun.displayScor();