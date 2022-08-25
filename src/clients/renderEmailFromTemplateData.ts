import pug from 'pug';
import {convert} from 'html-to-text';
import previewEmail from 'preview-email';
import juice from 'juice';
import util from 'util';
import log from '../log';

const juiceResources = util.promisify(juice.juiceResources);

interface RenderEmailFromTemplateParams {
  subjectTemplate: string,
  bodyTemplate: string,
  locals?: Record<string, any>,
  preview?: boolean,
  style?: string,
}

export interface RenderedEmail {
  subject: string,
  text: string,
  html: string,
}

const pad = (content: string, num: number) =>
  content
    .split('\n')
    .map((el) => (el.trim() ? '  '.repeat(num) + el : el))
    .join('\n');

const renderEmailFromTemplates = async ({
  subjectTemplate,
  bodyTemplate,
  locals = {},
  preview = false,
  style = '',
}: RenderEmailFromTemplateParams): Promise<RenderedEmail> => {
  const subject = pug.render(subjectTemplate, locals);
  const html = pug.render(`doctype html
html
  head
    style #{style}
  body
${pad(bodyTemplate, 2)}`, {...locals, style});
  const text = convert(html);

  const resultingHtml = await juiceResources(html, {});
  log.info(JSON.stringify(resultingHtml, null, 1));

  const result = {
    subject,
    text,
    html: resultingHtml,
  };

  if (preview) {
    await previewEmail(result);
  }

  return result;
};

export default renderEmailFromTemplates;
