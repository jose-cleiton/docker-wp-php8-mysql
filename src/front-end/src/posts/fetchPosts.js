import axios from 'axios';
import parseContent from '../helpers/parseContent';

const fetchPosts = () => {
  return axios.get('http://localhost/wp-json/api/post/')
    .then(res => {
      const data = res.data.map(post => {
        const images = [];
        const content = parseContent(post.conteudo.replace(/<img.*?>/g, (match, offset) => {
          const srcMatch = match.match(/src=['"]([^'"]+)['"]/);
          if (srcMatch) {
            images.push(srcMatch[1]);
          }
          return '';
        }));
        return {
          ...post,
          content,
          images,
        };
      });
      
      return data;

    });
};

export default fetchPosts;
