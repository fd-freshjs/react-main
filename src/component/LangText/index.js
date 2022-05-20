import { useTranslation } from '../../hooks';

function LangText(props) {
  const translate = useTranslation(props.dict);
  return translate(props.code, props.ctx);
}

export default LangText;
