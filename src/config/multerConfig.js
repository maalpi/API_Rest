import multer from 'multer';
import { extname, resolve } from 'path';

// mais uma especie de segurança pra não correr o risco de nomear arquivos com mesmo nome
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      /* gerando novo nome para o arquivo
      o Date é pra colocar o nome em milisegundos e o extname file.originalname é a extensao */
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
