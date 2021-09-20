import {parseString as parseStringOrig} from 'xml2js';
import util from 'util';

const parseXml = util.promisify<string, Record<string, any>>(parseStringOrig);

export default parseXml;
